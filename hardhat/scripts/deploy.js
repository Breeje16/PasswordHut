const hre = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const passwordHut = await ethers.getContractFactory("PasswordHut");
  const passwordHutContract = await passwordHut.deploy();
  await passwordHutContract.deployed();
  console.log("PasswordHut deployed to:", passwordHutContract.address);

  console.log("Sleeping.....");
  await sleep(30000);

  await hre.run("verify:verify", {
    address: passwordHutContract.address,
    constructorArguments: [],
    });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });