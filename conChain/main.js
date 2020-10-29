const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('01b653d6c724491c23dfd2fe7c49394f953af5a686c957a8f74895cbaa35e18f');
const myWalletAddress = myKey.getPublic('hex');


let conCoin = new Blockchain(); 

/*

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
conCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
conCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of X is', conCoin.getBalanceOfAddress(myWalletAddress));
console.log('Is blockcahin valid? ' + conCoin.isChainValid());

conCoin.chain[1].transactions[0].amount = 1;

console.log('\n Starting the miner again...');
conCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of X is', conCoin.getBalanceOfAddress(myWalletAddress));
console.log('Is blockcahin valid? ' + conCoin.isChainValid());

--------------------------------------------

console.log('\n Starting the miner again...');
conCoin.minePendingTransactions('xs-address');

console.log('\n Balance of X is', conCoin.getBalanceOfAddress('xs-address'));

conCoin.createTransaction(new Transaction('address1', 'address2', 100));
conCoin.createTransaction(new Transaction('address2', 'address1', 50));

console.log('Mining block 1...');
conCoin.addBlock(new Block(1, "02/01/2020", { amount: 4 }));

console.log('Mining block 2...');
conCoin.addBlock(new Block(2, "03/02/2020", { amount: 10 }));

console.log('Is blockcahin valid? ' + conCoin.isChainValid());

conCoin.chain[1].data = { amount: 100 };
conCoin.chain[1].data = conCoin.chain[1].calculateHash();

console.log('Is blockcahin valid? ' + conCoin.isChainValid());

console.log(JSON.stringify(conCoin, null, 4));

**/