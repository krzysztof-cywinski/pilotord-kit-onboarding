import { ethers } from "hardhat";
import abiSTR from "../abi/STR.json";
import abiRealDigitalEnableAccount from "../abi/RealDigitalEnableAccount.json";

// Function that returns a promise that resolves after a given number of milliseconds
function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
};

// Enables an account, mints tokens and burns tokens
async function example1() {
    const STR = await ethers.getContractAt(abiSTR, '<SRT contract address>');
    const enableAccount = await ethers.getContractAt(abiRealDigitalEnableAccount, '<RealDigitalEnableAccount contract address>');
    const [, participantX, anotherAddressParticipantX ] = await ethers.getSigners();

    // After an address is enabled by the BACEN, the institution can enable new addresses
    await enableAccount.connect(participantX).enableAccount(anotherAddressParticipantX.address);

    // Whenever a new address is enabled, it must wait for one block time to be able to be used
    await delay(5000);

    // Mints Real Digital to the participant's wallet
    // Remember that there are two decimal places, so if you pass the value 100 = 1 Real Digital
    // ethers.utils.parseUnits("100.50", 2) can be used to format a value for the contract
    const mintResponse = await STR.connect(anotherAddressParticipantX).requestToMint(ethers.utils.parseUnits("100.50", 2));
    console.log(mintResponse.hash);
    const burnResponse = await STR.connect(anotherAddressParticipantX).requestToBurn(ethers.utils.parseUnits("100", 2));
    console.log(burnResponse.hash);
}