// utils/verify.js
const { run } = require("hardhat");

async function verifyContract(address, constructorArgs) {
  console.log("Verifying contract on Etherscan...");
  try {
    await run("verify:verify", {
      address: address,
      constructorArguments: constructorArgs,
    });
    console.log("Contract verified successfully.");
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Contract is already verified.");
    } else {
      console.error("Verification failed:", error);
    }
  }
}

module.exports = { verifyContract };
