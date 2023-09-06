import {ethers} from "hardhat";
import { BigNumber } from "ethers";
import abiITPFtOperation1002 from "../abi/ITPFtOperation1002.json";

/**
 * TPFtOperation1002 - Allows the Central Bank to settle a public offer
 * involving tokenized Federal Public Title (TPFt) for a participant
 * who is registered in Real Digital using their CNPJ8.
 */
async function tpftOperation1002() {
  const TPFtOperation1002 = await ethers.getContractAt(
    abiITPFtOperation1002,
    "<TPFtOperation1002 Contract Address>"
    );

  /**
   * Sender refers to the assignor - the Central Bank acts on behalf of the National Treasury Secretariat (STN).
   * Receiver refers to the assignee - Financial Institution Participant registered in Real Digital.
   * Restrictions:
   *  1. The wallet address of the Central Bank must have the AUCTION_PLACEMENT_ROLE role.
   *  2. Both the wallet address of the National Treasury Secretariat and the Financial Institution Participant
   *     must be enabled in the TPFt contract.
   */

  const [ , , receiverAccount ] = await ethers.getSigners();
  const params = {
    operationId: '<Operation number + current date in yyyyMMdd format>',
    cnpj8Sender: '<CNPJ8 of the assignor of the operation. It will always be the CNPJ8 of the STN>',
    cnpj8Receiver: '<CNPJ8 of the assignee of the operation>',
    callerPart: '<Party transmitting the operation command>',
    tpftData: {
      acronym: '<Acronym of the TPFt>',
      code: "<Unique code of the TPFt>",
      maturityDate: '<TPFt maturity date in milliseconds (Unix timestamp)>',
    },
    tpftAmount: '<Amount of TPFt to be traded>',
    unitPrice: '<Unit price of TPFt>',
  }

  const callerPartBySender =  BigNumber.from(0) //When the assignor is transmitting the operation command.
  const callerPartByReceiver =  BigNumber.from(1) //When the assignee is transmitting the operation command.

  //Registration of the public offer settlement of TPFt by the receiver
  //calling the auctionPlacement function
  const receiverTransaction = await TPFtOperation1002
    .connect(receiverAccount)
    .auctionPlacement(
      params.operationId,
      params.cnpj8Sender,
      params.cnpj8Receiver,
      callerPartByReceiver,
      params.tpftData,
      params.tpftAmount,
      params.unitPrice
    )

  // Wait until the transaction sent by the receiver is confirmed on the blockchain.
  await receiverTransaction.wait();

  // Response of the public offer settlement operation of TPFt.
  console.log(receiverTransaction.hash);
}
