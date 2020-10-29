import { Injectable } from '@angular/core';
import { Blockchain } from 'conChain/blockchain';
import EC from "elliptic";

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  public blockchainInstance = new Blockchain();
  public walletKeys: Array<IWalletKey> = [];

  constructor() { 
    this.blockchainInstance.difficulty = 2;
    this.generateWalletKeys();
    this.generateWalletKeys();
    this.blockchainInstance.minePendingTransactions(this.walletKeys[0].publicKey);

  }

  addressIsFromCurrentUser(address) {
    return address === this.walletKeys[1].publicKey;
  }

  getBlocks(){
    return this.blockchainInstance.chain;
  }

  addTransaction(tx){
    this.blockchainInstance.addTransaction(tx);
  }

  getPendingTransactions(){
    return this.blockchainInstance.pendingTransactions;
  }

  minePendingTransactions(){
    this.blockchainInstance.minePendingTransactions(
      this.walletKeys[1].publicKey
    )
  }

  private generateWalletKeys(){
    const ec = new EC.ec('secp256k1');
    const key = ec.genKeyPair();

    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex'),
    });
  }
}

export interface IWalletKey {
  keyObj: any;
  publicKey: string;
  privateKey: string;
}