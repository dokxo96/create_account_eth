import logo from './logo.svg';
import './App.css';
import {ethers} from 'ethers';
import { useState } from 'react';


function App() {
  const [accounts,setAccounts] =useState({
    address:"",
    phrase:"",
    secret:"",
    show:false
  });


  const createRamdomAccount =()=>{

    // All createRandom Wallets are generated from random mnemonics
    let wallet = ethers.Wallet.createRandom();
    console.log("🪲 ~ file: App.js:9 ~ createRamdomAccount ~ address:", wallet.address)
    console.log("🪲 ~ file: App.js:9 ~ createRamdomAccount ~ phrase:", wallet.mnemonic?.phrase)
    let phrase =wallet.mnemonic?.phrase;
    let mnemonicWallet = ethers.Wallet.fromPhrase(phrase);
    console.log("🪲 ~ file: App.js:16 ~ createRamdomAccount ~ privateKey:", mnemonicWallet.privateKey)
    
    setAccounts({...accounts,
      address:wallet.address,
      phrase:wallet.mnemonic?.phrase,
      secret:mnemonicWallet.privateKey
    })
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
 
        <button onClick={createRamdomAccount}>Create a fucking account</button>

        {accounts.address.length>0 && 
        <>
        <div>
          <h3>Your new address: {accounts.address}</h3>
          <h4>Your secreates are here.dont show to anyone</h4>
          <button onClick={(e)=>{setAccounts({...accounts,
      show: !accounts
    })}}> see my secrets ...</button>
          {accounts.show && 
          <>
            <h5>Your new phrase:  {accounts.phrase}</h5>
            <h5>Your new secret:  {accounts.secret}</h5>
          </>}
         

        </div>
        </>}
      </header>
    </div>
  );
}

export default App;
