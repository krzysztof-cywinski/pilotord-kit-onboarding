import { ethers } from "hardhat";
import abiAddressDiscovery from '../abi/AddressDiscovery.json';

// finds the RealDigital contract address
async function example4() {
    const contract = await ethers.getContractAt(abiAddressDiscovery, '<Address Discovery contract address>');
    const realDigitalAddress = await contract.addressDiscovery(ethers.utils.id('RealDigital'));

    console.log(realDigitalAddress);
}