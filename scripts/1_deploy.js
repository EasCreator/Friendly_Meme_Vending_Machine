async function main() {
  console.log(`Preparing deployment...\n`)

  const Token = await ethers.getContractFactory('Token')

  const accounts = await ethers.getSigners()

  console.log(`Accounts fetched:\n${accounts[0].address}\n${accounts[1].address}\n`)

  const fmvm = await Token.deploy('Friendly Meme Vending Machine', 'FMVM', '1000000000')
  await fmvm.deployed()
  console.log(`FMVM Deployed to: ${fmvm.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
