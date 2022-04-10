require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/59JEB49mW5zetSi5QSyXQObFA6zaPIJC',
      accounts: ['689b1c7a98d1d7bac9b00787908534618b0e24addc70cc443a38f965b2849e60']
    },
  },
};