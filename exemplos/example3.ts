import { ethers } from "hardhat";
import abiRealTokenizado from '../abi/RealTokenizado.json';

// Function that returns a promise that resolves after a given number of milliseconds
function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
};

// Enables an address for a customer and performs a DVt or MEt issuance
async function example3() {
    const dvtParticipantX = await ethers.getContractAt(abiRealTokenizado, '<Real Tokenized contract address>');
    const [, participantX, customerX ] = await ethers.getSigners();

    // Participant enabling an address for a customer
    await dvtParticipantX.connect(participantX).enableAccount(customerX.address);

    // Whenever a new address is enabled, it must wait for one block time to be able to be used
    await delay(5000);

    // Participant issuing DVt to customer
    const response = await dvtParticipantX.connect(participantX).mint(customerX.address, ethers.utils.parseUnits("100", 2));

    console.log(response.hash);
}