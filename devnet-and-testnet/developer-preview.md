---
description: Wasm0 Developer Preview 01
---

# Developer Preview

This is a preliminary developer version of the WASM-0 chain explicitly designed for deploying and interacting with WASM-based smart contracts, utilizing a compatible go-Ethereum execution environment.

{% hint style="danger" %}
As an early-stage release, it should be noted that this version of the service might be highly unstable and prone to numerous bugs and errors.
{% endhint %}

## Network Params and Chain Resources

**Network params:**

* **Network name**: WASM-0 Developer Preview
* **RPC URL**: [https://rpc.devnet.wasm0.io/](https://rpc.devnet.wasm0.io/)
* **Chain ID**: 99
* **Symol**: WZT

Here are links to WASM-0 developer preview resources:

* **Faucet**: [https://faucet.devnet.wasm0.io/](https://faucet.devnet.wasm0.io/)
* **RPC**: [https://rpc.devnet.wasm0.io/](https://rpc.devnet.wasm0.io/)
* **Explorer**: [https://blockscout.devnet.wasm0.io/](https://blockscout.devnet.wasm0.io/)

## Example & SDK

Here is an example of the "Hello World" smart contract:

```rust
#![no_std]

use wasm0x_zkwasmsdk::*;

#[no_mangle]
pub extern "C" fn main() {
    let hello_world = "Hello, World";
    evm_return(hello_world.as_ptr(), hello_world.len() as u32);
}
```

### SDK for Integration:&#x20;

{% embed url="https://github.com/wasm0/wasm0-rustsdk" %}
