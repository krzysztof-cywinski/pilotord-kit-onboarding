import { ethers } from "hardhat";
import { BigNumber } from "ethers";
import abiITPFtOperation1052 from "../abi/ITPFtOperation1052.json";

/**
 * TPFtOperation1052 - Allows participants registered in Real Digital
 * to perform the purchase and sale operation involving tokenized Federal Public Title (TPFt)
 * among themselves and/or their clients using their CNPJ8s.
 */
async function tradeByCNPJ8() {
  const TPFtOperation1052 = await ethers.getContractAt(
    abiITPFtOperation1052,
    "<TPFtOperation1052 Contract Address>"
  );
  // Sender refers to the assignor (holder of TPFts) and receiver refers to the assignee (non-holder of TPFts)
  const [, senderAccount, receiverAccount] = await ethers.getSigners();
  const params = {
    operationId: "<Operation number + current date in yyyyMMdd format>",
    cnpj8Sender: "<CNPJ8 of the assignor of the operation>",
    cnpj8Receiver: "<CNPJ8 of the assignee of the operation>",
    callerPart: "<Party transmitting the operation command>",
    tpftData: {
      acronym: "<Acronym of the TPFt>",
      code: "<Unique code of the TPFt>",
      maturityDate: "<TPFt maturity date in milliseconds (Unix timestamp)>",
    },
    tpftAmount: "<Amount of TPFt to be traded>",
    unitPrice: "<Unit price of TPFt>",
  };

  const callerPartBySender = BigNumber.from(0); //When the assignor is transmitting the operation command.
  const callerPartByReceiver = BigNumber.from(1); //When the assignee is transmitting the operation command.

  //Execution by the sender (assignor) to perform the purchase and sale operation
  //informing the CNPJ8.
  const senderTransaction = await TPFtOperation1052
    .connect(senderAccount)
    ?.[
      "trade(uint256,uint256,uint256,uint8,(string,string,uint256),uint256,uint256)"
    ](
      params.operationId,
      params.cnpj8Sender,
      params.cnpj8Receiver,
      callerPartBySender,
      params.tpftData,
      params.tpftAmount,
      params.unitPrice
    );

  //Wait until the transaction sent by the sender is confirmed on the blockchain.
  await senderTransaction.wait();

  //Execution by the receiver (assignee) to perform the purchase and sale operation
  //informing the CNPJ8.
const receiverTransaction = await TPFtOperation1052
    .connect(receiverAccount)
    ?.[
      "trade(uint256,uint256,uint256,uint8,(string,string,uint256),uint256,uint256)"
    ](
      params.operationId,
      params.cnpj8Sender,
      params.cnpj8Receiver,
      callerPartByReceiver,
      params.tpftData,
      params.tpftAmount,
      params.unitPrice
    );

// Wait until the transaction sent by the receiver is confirmed on the blockchain.
await receiverTransaction.wait();

// Response of the purchase and sale operation execution
console.log(senderTransaction.hash);
console.log(receiverTransaction.hash);
}

/**
 * TPFtOperation1052 - Allows participants registered in Real Digital
 * to perform the purchase and sale operation involving tokenized Federal Public Title (TPFt)
 * among themselves and/or their clients using their wallet addresses.
 */
async function tradeByAddresses() {
  const TPFtOperation1052 = await ethers.getContractAt(
    abiITPFtOperation1052,
    "<TPFtOperation1052 Contract Address>"
  );

  // Sender refers to the assignor (holder of TPFts) and receiver refers to the assignee (non-holder of TPFts)
  const [, senderAccount, receiverAccount] = await ethers.getSigners();
  const params = {
    operationId: "<Operation number + current date in yyyyMMdd format>",
    callerPart: "<Party transmitting the operation command>",
    tpftData: {
      acronym: "<Acronym of the TPFt>",
      code: "<Unique code of the TPFt>",
      maturityDate: "<TPFt maturity date in milliseconds (Unix timestamp)>",
    },
    tpftAmount: "<Amount of TPFt to be traded>",
    unitPrice: "<Unit price of TPFt>",
  };

  const callerPartBySender = BigNumber.from(0); //When the assignor is transmitting the operation command.
  const callerPartByReceiver = BigNumber.from(1); //When the assignee is transmitting the operation command.

  //Registration by the sender (assignor) to perform the purchase and sale operation
  //informing the wallet addresses.
  const senderTransaction = await TPFtOperation1052
    .connect(senderAccount)
    ?.[
      "trade(uint256,address,address,uint8,(string,string,uint256),uint256,uint256)"
    ](
      params.operationId,
      senderAccount.address,
      receiverAccount.address,
      callerPartBySender,
      params.tpftData,
      params.tpftAmount,
      params.unitPrice
    );

  // Wait until the transaction sent by the sender is confirmed on the blockchain.
  await senderTransaction.wait();

  //Registration by the receiver (assignee) to perform the purchase and sale operation
  //informing the wallet addresses.
  const receiverTransaction = await TPFtOperation1052
    .connect(receiverAccount)
    ?.[
      "trade(uint256,address,address,uint8,(string,string,uint256),uint256,uint256)"
    ](
      params.operationId,
      senderAccount.address,
      receiverAccount.address,
      callerPartByReceiver,
      params.tpftData,
      params.tpftAmount,
      params.unitPrice
    );

  // Wait until the transaction sent by the receiver is confirmed on the blockchain.
  await receiverTransaction.wait();

  // Response of the purchase and sale operation execution
  console.log(senderTransaction.hash);
  console.log(receiverTransaction.hash);
}