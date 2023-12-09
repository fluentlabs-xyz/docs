# Deploying Your App to Fluent

Now that you've created your app using the Fluentbase SDK, the next step is deploying it to the Fluent network.

## Prerequisites

Before deploying your app, ensure you have the necessary dependencies installed and NodeJS available on your system.

```bash
yarn
```

## Deploying Your App

Utilize the provided [`deploy-contract.js`](https://github.com/fluentlabs-xyz/fluentbase/blob/devel/examples/deploy-contract.js) script to deploy your freshly compiled app.&#x20;

```javascript
const Web3 = require('web3');
const fs = require('fs');

// provide your private key 
const DEPLOYER_PRIVATE_KEY = 'enter your private key here';

const main = async () => {
    if (process.argv.length < 3) {
        console.log(`You must specify path to the WASM binary!`);
        console.log(`Example: node deploy-contract.js --dev ./bin/greeting.wasm`);
        process.exit(-1);
    }
    let args = process.argv.slice(2);
    const checkFlag = (param) => {
        let indexOf = args.indexOf(param)
        if (indexOf < 0) {
            return false
        }
        args.splice(indexOf, 1)
        return true
    };
    let isLocal = checkFlag('--local')
    let isDev = checkFlag('--dev')

    let web3Url = 'https://rpc.dev0.fluentlabs.xyz/';
    if (isLocal) {
        web3Url = 'http://127.0.0.1:8545';
    }

    let [binaryPath] = args;
    let wasmBinary = fs.readFileSync(binaryPath).toString('hex');
    const web3 = new Web3(web3Url);
    let privateKey = process.env.DEPLOYER_PRIVATE_KEY || DEPLOYER_PRIVATE_KEY;

    console.log('Signing transaction...');
    const signedTransaction = await web3.eth.accounts.signTransaction({
        data: '0x' + wasmBinary,
        gas: 1_000_000,
    }, privateKey)

    console.log('Sending transaction...');
    const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
    console.log(`Receipt: ${JSON.stringify(receipt, null, 2)}`)

    const {contractAddress} = receipt;
    if (contractAddress) {
        console.log(`Contract address is: ${contractAddress}`);
    }

    // let contractAddress = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9';
    const result = await web3.eth.call({
        to: contractAddress,
    });
    function isASCII(str) {
        return /^[\x00-\x7F]*$/.test(str);
    }
    if (isASCII(web3.utils.hexToAscii(result))) {
        console.log(`Message: "${web3.utils.hexToAscii(result)}"`)
    } else {
        console.log(`Message: "${result}"`)
    }

    const latestMinedBlockNumber = await web3.eth.getBlockNumber();
    console.log(`Latest block number: ${latestMinedBlockNumber}`);
}

main().then(console.log).catch(console.error);
```

To run the deployment script:

```bash
node deploy-contract.js --dev target/wasm32-unknown-unknown/release/hello_world.wasm
```

The `--dev` flag signifies the use of the development network. If you're running and testing Fluent locally, you can opt for `--local`.

## Understanding the Output

Upon running the script, you'll receive detailed information in the output, including:

* Transaction and receipt details
* Contract address
* Output message

In our case, you should observe the "Hello, World" message. The script invokes the contract after deployment with empty parameters.

You can also call one of the other existing apps, lets say `keccak256` using the following command:

```bash
node deploy-contract.js --dev ./bin/keccak256.wasm
```

It returns next message `0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470` that is equal to empty Keccak256 hash, beause we don't specify any input parameters.\


By following these steps, you'll successfully deploy your app to the Fluent network and observe the outcomes as specified in the script output.

## Codecs and Contexts

At the moment, our system doesn't have standardized code for passing block or transaction context elements inside the app. However, we are actively working on introducing this functionality in the upcoming testnet version.
