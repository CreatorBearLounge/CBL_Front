import React, { useState } from 'react';
import styled from 'styled-components';
import { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

const WalletBtn = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [defaultAccont, setDefaultAccount] = useState<string | null>(null);

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((result: any) => {
          accountChagedHandler(result[0]);
        });
    } else {
      setErrorMessage('Install MetaMask');
    }
  };

  const accountChagedHandler = (
    newAccount: React.SetStateAction<string | null>,
  ) => {
    setDefaultAccount(newAccount);
  };

  return (
    <>
      <ConnectBtn onClick={connectWalletHandler}>Connected Wallet</ConnectBtn>
    </>
  );
};

export default WalletBtn;

const ConnectBtn = styled.button`
  margin-left: 80px;
  border: 2px solid #796958;
  border-radius: 30px;
  width: 200px;
  height: 50px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 24px;
  color: #796958;
  background-color: #ecd9b2;
  cursor: pointer;
`;
