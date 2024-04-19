async function main() {
  const helloworldAlchemy = await ethers.getContractFactory("helloworld-alchemy");

  //Start Deployment, returning a promise that resolves to contract object
  const helloworld_alchemy = await helloworldAlchemy.deploy("Hello HAU!");
  console.log("Contract Deployed To Address: ", helloworld_alchemy.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
