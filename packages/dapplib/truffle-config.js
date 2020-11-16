require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog olympic tell educate ranch remember promote idea nation flee that'; 
let testAccounts = [
"0x0640357a8319f77cc5a7320b638d84f598df848973c941f08333d03f7ed44698",
"0xb36bcc7f4d1f37643f2a9205109957057c270d5697dd4f555a129d92f11b56d8",
"0xbaa0cf6caf3d28cb5910d73b421d4da6600681a7d994a6abd5e1358c2e8e7e3e",
"0xf028ebfeb25622b36cef1801091bb3210279e29a91b6fa3b6c3eadd248d6707e",
"0xe4f941af0adf0bd7a8c5fc08d7134c2e8b1b49dfd9743ca3a0029a714cd2bcec",
"0x04150b65585595e346a0d5b3c2f7f5a36da4beedb3ebd21139d60f323bc377d5",
"0xcd755c6248344be9729eeda601acb7f0cd2e5ad5e37dabcc1b781772504dfec6",
"0xfb1f2534be3d0b550f8de500963c24e9665611d14b51cd84474de0f5746769e3",
"0x1cd8db5d4f319c8552ef9efef6707721b8c9d783622e40aeae649e5ad82816e9",
"0x96d84c6ca36f7b3cf9fd7c123c7572fda4d739902e60c68481e231bbb71dc16b"
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
