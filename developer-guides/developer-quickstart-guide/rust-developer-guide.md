# Rust Developer Guide

## **Prerequisites**

Before getting started, ensure you have the following dependencies installed on your system:

* **Wabt**: Install the latest version of WebAssembly Binary Toolkit. Instructions can be found on the [GitHub repository](https://github.com/WebAssembly/wabt).
* **Clang and CMake**: Install these if they are not already on your system.
*   For macOS users, LLVM can be installed via Homebrew:

    ```bash
    brew install llvm
    ```

***

## Install Fluent Scaffold CLI tool

To install the Fluent scaffold CLI tool, run the following command in your terminal:

```bash
cargo install gblend
```

To create a project, run the following in your terminal:

```bash
gblend
```

After installing the Fluent build tool, you can initialize a new project and choose the `Rust` option to bootstrap the starter project.

## Project Structure

```
.
├── Cargo.toml
├── Makefile
├── deployer
│   ├── deployer.js
│   └── package.json
├── src
│   ├── lib.rs
└── 
```

## Getting Started

For this guide, we will be working with the `lib.rs` file located in the `src` folder.

`src/lib.rs`

```rust
#![cfg_attr(target_arch = "wasm32", no_std)]
extern crate fluentbase_sdk;

use fluentbase_sdk::{basic_entrypoint, SharedAPI};

#[derive(Default)]
struct GREETING;

impl GREETING {
    fn deploy<SDK: SharedAPI>(&self) {
        // any custom deployment logic here
    }
    fn main<SDK: SharedAPI>(&self) {
        // b"Hello, world": "b" here tells the compiler that the string should be treated as a byte sequence. 
        // This is called a byte string literal.
        const HELLO: &[u8] = b"Hello, world";
        SDK::write(HELLO.as_ptr(), HELLO.len() as u32);
    }
}
basic_entrypoint!(GREETING);
```

In this snippet, we can see how easy it is to interact with the Fluent VM. We only need to call the SDK, initialize the string, and transform it into bytes, which is the format supported by rWasm.

### **Compiling the Rust Smart Contract**

Understanding the deployment process starts with comprehending the role of the Makefile. This file compiles Rust code into Wasm & rWasm and generates the necessary binaries that will be embedded in a tx for deployment.

<pre class="language-bash"><code class="lang-bash"><strong>make
</strong></code></pre>

Executing this command compiles the code and produces two files: `greeting.wasm` and `greeting.rwasm` which is utilized for deployment purposes.

### **Deploying the Contract**

To initiate deployment, navigate to the `deployer` directory using the following command:

```bash
cd deployer
```

Once there, execute the following command to install any dependencies:

```bash
npm install
```

Subsequently, run this command to deploy the contract:

```bash
node deploy-contract.js --dev ../bin/greeting.wasm
```

Upon successful deployment, the receipt of your deployment transaction will be displayed, confirming the smart contract deployment on Fluent using the Fluent SDK.

To view your deployed Fluent contract, navigate to the [Fluent Devnet Explorer.](https://blockscout.dev.thefluent.xyz/) From there, you can input your token address to explore your deployed contract.
