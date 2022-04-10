const main = async () =>{
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions"); //class that will generate instances of the contract 
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log("Transactions address: ", transactionsContract.address);
};

const runMain = async () =>{
  try{
    await main();
    process.exit(0); //0 successfull
  } catch (error) {
    console.error(error);
    process.exit(1); //1 error
  }
};

runMain();