# Building a Blended App

## Introduction

This guide provides detailed instructions on how to build a blended `HelloWorld` application on Fluent. It combines a Rust smart contract to print “Hello” and a Solidity smart contract to print “World.”

This setup demonstrates:

* composability between different programming languages (Solidity and Rust)
* and interoperability between different virtual machine targets (EVM and Wasm)

within a single execution environment.

## Prerequisites

Ensure you have the following installed:

* Node.js and npm
* Rust and Cargo
* Hardhat
* pnpm (install via npm: `npm install -g pnpm`)

***

## Step 1: Initialize Your Rust Project

### 1.1 Set Up the Rust Project

```bash
cargo new --lib greeting
cd greeting
```

### 1.2 Configure the Rust Project

`Cargo.toml`

```toml
[package]
edition = "2021"
name = "greeting"
version = "0.1.0"

[dependencies]
alloy-sol-types = {version = "0.7.4", default-features = false}
fluentbase-sdk = {git = "https://github.com/fluentlabs-xyz/fluentbase", default-features = false}

[lib]
crate-type = ["cdylib", "staticlib"] #For accessing the C lib
path = "lib.rs"

[profile.release]
lto = true
opt-level = 'z'
panic = "abort"
strip = true

[features]
default = []
std = [
  "fluentbase-sdk/std",
]

```

### 1.3 Write the Rust Smart Contract

`src/lib.rs`

```rust
#![cfg_attr(target_arch = "wasm32", no_std)]
extern crate alloc;
extern crate fluentbase_sdk;

use alloc::string::String;
use fluentbase_sdk::{
    basic_entrypoint, // macro that allows you to create an entrypoint
    derive::{router // fn recieves contract input and dispatch it to the relevant methods. In this case, solidity based on the first 4 bytes of the input. 
    , signature}, // decorator that follows abi encoding

    SharedAPI,
};

#[derive(Default)]
struct ROUTER;

pub trait RouterAPI {
    fn deploy<SDK: SharedAPI>(&self);
    fn greeting(&self) -> String; 
    fn custom_greeting(&self, message: String) -> String;
}

#[router(mode = "solidity")] //solidity router to interface with solidity contract
impl RouterAPI for ROUTER {
    fn deploy<SDK: SharedAPI>(&self) {
        // any custom deployment logic here
    }

    #[signature("function greeting() external returns (string)")]
    fn greeting(&self) -> String {
        "Hello".into()
    }
}

basic_entrypoint!(ROUTER);
```

<details>

<summary><strong>Detailed Code Explanation</strong></summary>

## 1. **Attributes and Configuration**:

```rust
#![cfg_attr(target_arch = "wasm32", no_std)]
extern crate alloc;
extern crate fluentbase_sdk;
```

* `#![cfg_attr(target_arch = "wasm32", no_std)]`: This attribute tells the Rust compiler that if the target architecture is `wasm32`, the `no_std` attribute should be applied. This means the standard library will not be linked, and only the core library will be used. This is important for WebAssembly (Wasm) targets where the standard library is not available.
* `extern crate alloc;`: This line imports the `alloc` crate, which provides dynamic memory allocation. This is necessary when `no_std` is used but dynamic memory is still required.
* `extern crate fluentbase_sdk;`: This line imports the `fluentbase_sdk` crate, which provides the necessary tools and macros to interact with the Fluent network.

## **2.** Imports:

```rust
use alloc::string::String; // This imports the String type from the alloc crate.

use fluentbase_sdk::{
    basic_entrypoint,
    derive::{router, signature},
    SharedAPI,
};
```

* `use fluentbase_sdk::{ basic_entrypoint, derive::{router, signature}, SharedAPI, };`: This imports the necessary items from the `fluentbase_sdk` crate:
  * `basic_entrypoint`: A macro to generate the entry point for the contract.
  * `router` and `signature`: Macros to define contract methods and their signatures.

## **3. Main** Code

* `#[derive(Default)]`: This automatically implements the `Default` trait for the `ROUTER` struct.
* `struct ROUTER;`: This defines an empty struct named `ROUTER`.

### 3.1 RouterAPI Trait

```rust
pub trait RouterAPI {
    fn deploy<SDK: SharedAPI>(&self);
    fn greeting(&self) -> String; 
    fn custom_greeting(&self, message: String) -> String;
}
```

* `pub trait RouterAPI`: This defines a public trait named `RouterAPI`.
* `fn deploy<SDK: SharedAPI>(&self);`: This defines a method `deploy` that takes a reference to `self` and a generic parameter `SDK` that implements the `SharedAPI` trait. This method is intended for custom deployment logic.
* `fn greeting(&self) -> String;`: This defines a method `greeting` that takes a reference to `self` and returns a `String`. This will be implemented to return the greeting "Hello".
* `fn custom_greeting(&self, message: String) -> String;`: This defines a method `custom_greeting` that takes a reference to `self` and a `String` parameter `message`, and returns a `String`. This can be used to return a custom greeting message.

### 3.2 Implementing the RouterAPI Trait for ROUTER

```rust
#[router(mode = "solidity")]
impl RouterAPI for ROUTER {
    fn deploy<SDK: SharedAPI>(&self) {
        // Custom deployment logic
    }

    #[signature("function greeting() external returns (string)")]
    fn greeting(&self) -> String {
        "Hello".into()
    }
}
```

* `#[router(mode = "solidity")]`: This macro annotation indicates that the `impl` block is defining methods for the `solidity` mode.
* `impl RouterAPI for ROUTER`: This starts the implementation of the `RouterAPI` trait for the `ROUTER` struct.
* `fn deploy<SDK: SharedAPI>(&self) { ... }`: This provides an empty implementation for the `deploy` method.
* `#[signature("function greeting() external returns (string)")]`: This macro annotation specifies the Solidity signature for the `greeting` method, indicating that it is a Solidity function with the signature `function greeting() external returns (string)`.
* `fn greeting(&self) -> String { "Hello".into() }`: This implements the `greeting` method to return the string "Hello".

### 3.3 Basic Entrypoint Macro

```rust
basic_entrypoint!(ROUTER);
```

* `basic_entrypoint!(ROUTER);`: This macro generates the necessary boilerplate code to make the `ROUTER` struct the entry point for the contract. It sets up the required functions for interaction with the Fluent platform.

</details>

### 1.4 Create a Makefile

`Makefile`

```makefile
.DEFAULT_GOAL := all

RUSTFLAGS := '-C link-arg=-zstack-size=131072 -C target-feature=+bulk-memory -C opt-level=z -C strip=symbols'

WASM_TARGET := ./target/wasm32-unknown-unknown/release/greeting.wasm
WASM_OUTPUT_DIR := bin
WASM_OUTPUT_FILE := $(WASM_OUTPUT_DIR)/greeting.wasm
WASM_WAT_FILE := $(WASM_OUTPUT_DIR)/greeting.wat

CARGO_BUILD := cargo build --release --target=wasm32-unknown-unknown --no-default-features
RM := rm -rf
MKDIR := mkdir -p
CP := cp
WASM2WAT := wasm2wat

all: build

build: prepare_output_dir
	@echo "Building the project..."
	RUSTFLAGS=$(RUSTFLAGS) $(CARGO_BUILD)

	@echo "Copying the wasm file to the output directory..."
	$(CP) $(WASM_TARGET) $(WASM_OUTPUT_FILE)

	@echo "Converting wasm to wat..."
	$(WASM2WAT) $(WASM_OUTPUT_FILE) > $(WASM_WAT_FILE)

prepare_output_dir:
	@echo "Preparing the output directory..."
	$(RM) $(WASM_OUTPUT_DIR)
	$(MKDIR) $(WASM_OUTPUT_DIR)

clean:
	@echo "Cleaning the project..."
	$(RM) $(WASM_OUTPUT_DIR)
	$(RM) ./target

.PHONY: all build prepare_output_dir clean
```

### 1.5 Build the Wasm Project

Run:

```bash
make
```

***

## Step 2: Initialize Your Solidity Project

### 2.1 Create Your Project Directory

```bash
mkdir typescript-wasm-project
cd typescript-wasm-project
npm init -y

```

### 2.2 Install Dependencies

```bash
npm install --save-dev typescript ts-node hardhat hardhat-deploy ethers dotenv @nomicfoundation/hardhat-toolbox @typechain/ethers-v6 @typechain/hardhat @types/node
pnpm install
npx hardhat
# Follow the prompts to create a basic Hardhat project.
```

### 2.3 Configure TypeScript and Hardhat

#### **2.3.1 Update Hardhat Configuration**

`hardhat.config.ts`

```ts
import { HardhatUserConfig } from "hardhat/types";
import "hardhat-deploy";
import "@nomicfoundation/hardhat-toolbox";
import "./tasks/greeting";

require("dotenv").config();

const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY || "";

const config: HardhatUserConfig = {
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "https://rpc.dev.thefluent.xyz/",
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    hardhat: {
      chainId: 1337,
    },
  },
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};

export default config;
```

#### **2.3.2 Update `package.json`**

`package.json`

```json
{
  "name": "typescript-wasm-project",
  "version": "1.0.0",
  "description": "A TypeScript project to deploy Solidity and WASM contracts",
  "main": "index.js",
  "scripts": {
    "compile": "npx hardhat compile",
    "deploy": "npx hardhat deploy"
  },
  "devDependencies": {
    "@nomicfoundation/hardhat-ethers": "^3.0.0",
    "@nomicfoundation/hardhat-toolbox": "^5.0.0",
    "@nomicfoundation/hardhat-verify": "^2.0.0",
    "@openzeppelin/contracts": "^5.0.2",
    "@typechain/ethers-v6": "^0.5.0",
    "@typechain/hardhat": "^9.0.0",
    "@types/node": "^20.12.12",
    "dotenv": "^16.4.5",
    "hardhat": "^2.22.4",
    "hardhat-deploy": "^0.12.4",
    "ts-node": "^10.9.2",
    "typescript": "^5.4.5"
  },
  "dependencies": {
    "ethers": "^6.12.2",
    "fs": "^0.0.1-security"
  }
}
```

### 2.4 Set Up Environment Variables

Create a `.env` file:

```vbnet
DEPLOYER_PRIVATE_KEY=your-private-key-here
```

> Replace `your-private-key-here` with your actual private key.

### 2.5 Write the Solidity Contracts

{% hint style="info" %}
In this section, we'll create two Solidity smart contracts: [`IFluentGreeting` ](#user-content-fn-1)[^1]and `GreetingWithWorld`. \
\
The interface contract allows the Solidity contract to call the Rust function, demonstrating interoperability between Solidity and Rust within a single execution environment. \
\
The final `GreetingWithWorld` contract provides a composable solution that combines the outputs of both the Rust and Solidity contracts.
{% endhint %}

* Create a `contracts` directory and add the following:

#### 2.5.1 Define the Interface

`contracts/IFluentGreeting.sol`

```solidity
solidityCopy code// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IFluentGreeting {
    function greeting() external view returns (string memory);
}
```

<details>

<summary>Detailed Code Explanation</summary>

## **Interface Definition**:&#x20;

The `IFluentGreeting` interface declares a single function `greeting()` that is external and viewable, meaning it does not modify the state of the blockchain and returns a string. This function will be implemented by another contract and is used to interact with the Rust smart contract.

## Interaction with Rust Code:

The `greeting` function defined in this interface matches the Rust function that returns a greeting message. The Solidity interface allows the Solidity contract to call the Rust smart contract's function.

</details>

#### 2.5.2 Implement the Greeting Contract

`contracts/GreetingWithWorld.sol`

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./IFluentGreeting.sol";

contract GreetingWithWorld {
    IFluentGreeting public fluentGreetingContract;

    constructor(address _fluentGreetingContractAddress) {
        fluentGreetingContract = IFluentGreeting(_fluentGreetingContractAddress);
    }

    function getGreeting() external view returns (string memory) {
        string memory greeting = fluentGreetingContract.greeting();
        return string(abi.encodePacked(greeting, ", World"));
    }
}
```

<details>

<summary>Detailed Code Explanation</summary>

**Import Statement**: Imports the `IFluentGreeting` interface defined earlier.

**Contract Definition**: Defines a contract `GreetingWithWorld`.

**State Variable**: Declares a state variable `fluentGreetingContract` of type `IFluentGreeting`. This variable will hold the address of the deployed Rust smart contract.

**Constructor**:

* Takes an address `_fluentGreetingContractAddress` as a parameter.
* Initializes the `fluentGreetingContract` with the provided address.

<!---->

* **Function `getGreeting`**:
  * Calls the `greeting` function of the `fluentGreetingContract` to get the greeting message from the Rust contract.
  * Concatenates the greeting message with ", World" using `abi.encodePacked` and returns the resulting string.

## Interaction with Rust Code:

* The `GreetingWithWorld` contract interacts with the Rust smart contract by calling the `greeting` function via the `IFluentGreeting` interface.
* When `getGreeting` is called, it fetches the greeting message ("Hello") from the Rust contract, concatenates it with ", World", and returns the complete greeting ("Hello, World").

## How Solidity and Rust Interact:

1. **Rust Smart Contract Deployment**: The Rust smart contract is compiled to Wasm and deployed to the blockchain. It contains a function that returns the greeting "Hello".
2. **Solidity Interface (`IFluentGreeting`)**: The Solidity interface declares a `greeting` function that matches the function in the Rust contract.
3. **Solidity Implementation (`GreetingWithWorld`)**:
   * The `GreetingWithWorld` contract uses the `IFluentGreeting` interface to interact with the Rust contract.
   * It initializes with the address of the deployed Rust contract.
   * It calls the `greeting` function of the Rust contract to fetch the greeting message.
   * It concatenates the Rust greeting with ", World" and returns the result.

</details>

## Step 3: Deploy Both Contracts Using Hardhat

### 3.1 Create the Deployment Script

This deployment script is responsible for deploying both the Rust smart contract (compiled to Wasm) and the Solidity smart contract (`GreetingWithWorld`).

`deploy/01_deploy_contracts.ts`

```typescript
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "ethers";
import fs from "fs";
import crypto from "crypto";
import path from "path";
require("dotenv").config();

const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY || "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, ethers, config, network } = hre;
  const { deploy, save, getOrNull } = deployments;
  const { deployer: deployerAddress } = await getNamedAccounts();

  console.log("deployerAddress", deployerAddress);
// Deploy WASM Contract
  console.log("Deploying WASM contract...");
  const wasmBinaryPath = "./greeting/bin/greeting.wasm";
  const provider = new ethers.JsonRpcProvider(network.config.url);
  const deployer = new ethers.Wallet(DEPLOYER_PRIVATE_KEY, provider);

  const checkmateValidatorAddress = await deployWasmContract(wasmBinaryPath, deployer, provider, getOrNull, save);

//Deploy Solidity Contract
  console.log("Deploying GreetingWithWorld contract...");
  const fluentGreetingContractAddress = checkmateValidatorAddress;

  const greetingWithWorld = await deploy("GreetingWithWorld", {
    from: deployerAddress,
    args: [fluentGreetingContractAddress],
    log: true,
  });

  console.log(`GreetingWithWorld contract deployed at: ${greetingWithWorld.address}`);
};

async function deployWasmContract(
  wasmBinaryPath: string,
  deployer: ethers.Wallet,
  provider: ethers.JsonRpcProvider,
  getOrNull: any,
  save: any
) {
  const wasmBinary = fs.readFileSync(wasmBinaryPath);
  const wasmBinaryHash = crypto.createHash("sha256").update(wasmBinary).digest("hex");
  const artifactName = path.basename(wasmBinaryPath, ".wasm");
  const existingDeployment = await getOrNull(artifactName);

  if (existingDeployment && existingDeployment.metadata === wasmBinaryHash) {
    console.log(`WASM contract bytecode has not changed. Skipping deployment.`);
    console.log(`Existing contract address: ${existingDeployment.address}`);
    return existingDeployment.address;
  }

  const gasPrice = (await provider.getFeeData()).gasPrice;

  const transaction = {
    data: "0x" + wasmBinary.toString("hex"),
    gasLimit: 300_000_000,
    gasPrice: gasPrice,
  };

  const tx = await deployer.sendTransaction(transaction);
  const receipt = await tx.wait();

  if (receipt && receipt.contractAddress) {
    console.log(`WASM contract deployed at: ${receipt.contractAddress}`);

    const artifact = {
      abi: [],
      bytecode: "0x" + wasmBinary.toString("hex"),
      deployedBytecode: "0x" + wasmBinary.toString("hex"),
      metadata: wasmBinaryHash,
    };

    const deploymentData = {
      address: receipt.contractAddress,
      ...artifact,
    };

    await save(artifactName, deploymentData);
  } else {
    throw new Error("Failed to deploy WASM contract");
  }

  return receipt.contractAddress;
}

export default func;
func.tags = ["all"];

```

### 3.2 Create the Hardhat Task

`tasks/get-greeting.ts`

```tsx
import { task } from "hardhat/config";

task("get-greeting", "Fetches the greeting from the deployed GreetingWithWorld contract")
  .addParam("contract", "The address of the deployed GreetingWithWorld contract")
  .setAction(async ({ contract }, hre) => {
    const { ethers } = hre;
    const GreetingWithWorld = await ethers.getContractAt("GreetingWithWorld", contract);
    const greeting = await GreetingWithWorld.getGreeting();
    console.log("Greeting:", greeting);
  });

```

### 3.3 Compile and Deploy the Contracts

Run the following commands to compile and deploy your contracts:

```bash
pnpm hardhat compile
pnpm hardhat deploy
pnpm hardhat get-greeting --contract "Deployed GreetingWithWorld Contract Address"

```

[^1]: Is there supposed to be an "I" at the beginning?

