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

## Install Fluent scaffold CLI tool

To install the Fluent scaffold CLI tool, simply run the following command in your terminal:

```bash
cargo install hellofluent
```

To create a project, run the following in your terminal:

```bash
hellofluent
```

After installing the Fluent build tool, you can initialize a new project and choose the `Rust` option to bootstrap the starter project.

## Project structure

```
.
├── Cargo.lock
├── Cargo.toml
├── Makefile
├── deployor
│   ├── deployor.js
│   └── package.json
├── src
│   ├── greeting.rs
│   └── lib.rs
└── stack.s
```

## Getting Started

For this guide, we will be working with the `greeting.rs` file located in the `src` folder.

`src/greeting.rs`

```rust
use fluentbase_sdk::{LowLevelAPI, LowLevelSDK};

pub fn deploy() {}

pub fn main() {
    LowLevelSDK::sys_write("Hello, World".as_bytes());
}
```

In this snippet, we can see how easy it is to interact with our VM. We only need to call the SDK, initialize the string, and transform it into bytes, which is the format supported by our VM.

### **Compiling the Rust Smart Contract**

Understanding the deployment process starts with comprehending the role of the Makefile. This file compiles our Rust code into WASM & RWASM and generates the necessary binaries that will be embedded in our tx for deployment

<pre class="language-bash"><code class="lang-bash"><strong>make greeting
</strong></code></pre>

Executing this command compiles the code and produces two files: `greeting.wasm` and `greeting.rwasm` which is utilized for deployment purposes.

### **Deploying the Contract**

To initiate deployment, navigate to the `deployor` directory using the following command:

```bash
cd deployor
```

Once there, execute the following command to install any dependencies:

```bash
npm install
```

Subsequently, run this command to deploy the contract:

```bash
node deploy-contract.js --dev ./bin/greeting.rwasm
```

Upon successful deployment, the receipt of your deployment transaction will be displayed, confirming the smart contract deployment on Fluent using the Fluent SDK.

To view your deployed Fluent contract, navigate to the [Fluent Devnet Explorer.](https://blockscout.dev.thefluent.xyz/) From there, you can input your token address to explore your deployed contract on the Fluent Network.
