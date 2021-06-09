var SPNVAToken = artifacts.require("./SPNVAToken.sol");
//var DappTokenSale = artifacts.require("./DappTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(SPNVAToken);
    // Token price is 0.001 Ether
   //var tokenPrice = 1000000000000000;
    //return deployer.deploy(DappTokenSale, DappToken.address, tokenPrice);
};
