import { ethers } from "hardhat";
import abiRealDigital from '../abi/RealDigital.json';
import abiRealDigitalDefaultAccount from '../abi/RealDigitalDefaultAccount.json';

// Function that searches for the default account of a participant and performs a CBDC transfer
async function example2() {
    const defaultAccount = await ethers.getContractAt(abiRealDigitalDefaultAccount, '<RealDigitalDefaultAccount contract address>');
    const cbdc = await ethers.getContractAt(abiRealDigital, '<RealDigital contract address>');
    const [, participantX] = await ethers.getSigners();

    // Identifier of the participant that will receive the transfer
    const cnpj8AnotherParticipant = '87654321';

    // Searches for the default address for the transfer
    const address = await defaultAccount.defaultAccount(cnpj8AnotherParticipant);

    // Performs the CBDC transfer
    const response = await cbdc.connect(participantX).transfer(address, ethers.utils.parseUnits("100", 2));

    console.log(response.hash);
}