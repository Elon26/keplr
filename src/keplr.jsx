import React, { useEffect, useState } from 'react';
import { Wallet, SecretNetworkClient } from "secretjs";

function Keplr() {
    const chainId = "secret-4";
    const [keplrName, setKeplrName] = useState("");

    window.keplr.enable(chainId);

    window.keplr.getKey(chainId).then(resp => {
        setKeplrName(resp.name);
    })

    const wallet = new Wallet(
        "build throw pluck arm open tide budget rack sing high citizen onion",
    );
    const myAddress = wallet.address;

    const url = "https://github.com/scrtlabs/api-registry";

    const secretjs = new SecretNetworkClient({
        url,
        chainId: "secret-4",
        wallet: wallet,
        walletAddress: myAddress
    });

    // secretjs.query.bank.balance({}).then(resp => console.log(resp));

    return (
        <div className="greeting">Добрый день, {keplrName}</div>
    );
}

export default Keplr;
