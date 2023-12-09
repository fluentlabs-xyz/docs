# Creating a New App using Fluentbase SDK

To demonstrate the usage of the Fluentbase SDK, explore the examples provided [in this repository](https://github.com/fluentlabs-xyz/fluentbase/tree/devel/examples). This repository contains a [collection of practical demonstrations](https://github.com/fluentlabs-xyz/fluentbase/tree/devel/examples/src) for building and executing apps on Fluent. Soon, these examples will leverage our optimized circuits.

## Get Started

In the [Makefile](https://github.com/fluentlabs-xyz/fluentbase/blob/devel/examples/Makefile), you'll find commands for compiling apps.&#x20;

To get started, ensure you have the `wasm32-unknown-unknown` compilation target installed (WASI support is coming soon).&#x20;

```bash
rustup target add wasm32-unknown-unknown
```

## To Compile Demo Apps

To compile demo examples in the repository, run the following command:

```bash
# to compile everything
make all
```

&#x20;Or, you can also compile a specific example app using:&#x20;

```bash
# to compile specific example
make greeting
make keccak256
make storage
```

> **Note:** Compiled artifacts are available in the [bin folder](https://github.com/fluentlabs-xyz/fluentbase/tree/devel/examples/bin).

For simplicity, we've stored all apps in a single crate, managing compilation via features.&#x20;

If you want to contribute or add a new example or demo app in our repo, remember to modify `Cargo.toml` and `Makefile` with your new feature.&#x20;

However, we recommend creating a new crate for each new app.

***

## To Create a New App

1. To kickstart your own repository with an example, create an empty crate and add the Fluentbase SDK dependency:

```bash
cargo new hello_world --lib
```

2. Now, copy the provided code into the `src/lib.rs` file. It includes essential functions named `deploy` (akin to Solidity's constructor) and `main` (called on each contract interaction).

```rust
#![no_std]
extern crate alloc;
extern crate fluentbase_sdk;

use fluentbase_sdk::{SysPlatformSDK, SDK};

#[no_mangle]
extern "C" fn deploy() {}

#[no_mangle]
extern "C" fn main() {
    let str = "Hello, World";
    SDK::sys_write(str.as_bytes());
}

```

3. Add the Fluentbase SDK dependency to your `Cargo.toml`:

```toml

[dependencies]
fluentbase-sdk = { path = "https://github.com/fluentlabs-xyz/fluentbase", default-features = false, features = ["evm"] }
```

Disable the `evm` feature flag if EVM features aren't required.&#x20;

4. Lastly, adjust the `Cargo.toml` with these lines:

```toml
[lib]
crate-type = ["cdylib"]

[profile.release]
panic = "abort"
lto = true
opt-level = 'z'
strip = true


```

5. Post-compilation, find your Wasm binary at `target/wasm32-unknown-unknown/release/hello_world.wasm`
6. Convert it to WAT format to view its textual representation ([WABT](https://github.com/WebAssembly/wabt) is required to be installed):

```bash
wasm2wat target/wasm32-unknown-unknown/release/hello_world.wasm
```

After following these steps, you'll be ready to deploy your app. For deployment instructions, please refer to the next section.

\
