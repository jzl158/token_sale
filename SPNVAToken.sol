pragma solidity ^0.5.16;

contract SPNVAToken {
    //Constructor
    //Set the Total number of tokens
    //Read the total number of tokens
    string  public name = "SPNVA Token";
    string  public symbol = "NOVA";
    string  public standard = "Nova Token v1.0";
    uint256 public totalSupply;

    constructor() public {
        totalSupply = 1000000;
    }
}
   