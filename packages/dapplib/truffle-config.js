require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drive flock slush stomach dash six prosper gown light army gather'; 
let testAccounts = [
"0x3581d11bd6554cff6141df8c3aafcceae41fec6ca447e6c4d826a13ebef9974f",
"0x6bdeaf2af347fc236911049489d2e2c3dde33943c658ec785ac32fbe65ecaf5e",
"0x06f30c7863ea712e360a133b7b05c6d89843873dd6aff1433a75f33d2522cb8d",
"0x6b9df3011be1c59cfb8244cd55e75b5a46f319af93f1839624c3d37df381e220",
"0xfc553b4c92701d6b7d1d7806a7a5b1bc50a82423262be11a0e3a91f976e1b946",
"0x3737b904961c79680fcdfdef03b9298e9a858ec44a53e83dc15c72a94ab8beba",
"0x93731640c765f3348544dc611944744e162c29cf9e2be7bf38e89a6400eee854",
"0x5de05f0c953d6bef5f7424fdbef74f62d11369f3ee2fe4fdebbc61c2f1b00138",
"0x64d3299ea50385ab774f2ebfd8915759b46cbffcd355ff3436585c505e5d58a6",
"0x30f652e68dd4ed3897f0c32aaf691aab03aeb500885c7c6688406d032f3cfdd9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
