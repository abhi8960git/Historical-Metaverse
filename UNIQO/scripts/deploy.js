async function main() {
  const HelloWorld = await ethers.getContractFactory("Marketplace");
  const nft = await ethers.getContractFactory("NFT");

  // Start deployment, returning a promise that resolves to a contract object
  const hello_world = await HelloWorld.deploy(2);
  const nFt = await nft.deploy();
  console.log("Contract deployed to address:", hello_world.address);
  console.log("nft contrac deployed to the  address ", nFt.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });