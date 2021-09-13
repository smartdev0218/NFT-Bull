import React from 'react';
import { useWeb3React } from '@web3-react/core'
import Navbar from '../Navbar/Navbar';
import { ConnectorId, useWalletModal } from '@pantherswap-libs/uikit'
import { injected, walletconnect } from '../../connectors'

const WalletConnect = () => {

    const { account, activate, deactivate } = useWeb3React()

    const handleLogin = (ConnectorId) => {
        if (ConnectorId === 'walletconnect') {
          return activate(walletconnect)
        }
        return activate(injected)
    }

    const { onPresentConnectModal } = useWalletModal(handleLogin, deactivate)

    const NETWORK_URL = process.env.REACT_APP_NETWORK_URL

    const shoot = () => {
        alert(NETWORK_URL);
    }
    
    return(
        <Navbar shootProps = {shoot} />
    )
}

export default WalletConnect