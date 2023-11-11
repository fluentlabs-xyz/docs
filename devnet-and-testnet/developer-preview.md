---
description: Fluent Developer Preview 01
---

# Developer Preview

This is a preliminary developer version of the WASM-0 chain explicitly designed for deploying and interacting with WASM-based smart contracts, utilizing a compatible go-Ethereum execution environment.

{% hint style="danger" %}
As an early-stage release, it should be noted that this version of the service might be highly unstable and prone to numerous bugs and errors.
{% endhint %}

## Network Params and Chain Resources

**Network params:**

* **Network name**: Fluent Developer Preview
* **RPC URL**: [https://rpc.dev0.fluentlabs.xyz/](https://rpc.dev0.fluentlabs.xyz/)
* **Chain ID**: 99
* **Symbol**: WZT

Here are links to Fluent developer preview resources:

* **Faucet**: [https://faucet.dev0.fluentlabs.xyz/](https://faucet.dev0.fluentlabs.xyz/)
* **RPC**: [https://rpc.dev0.fluentlabs.xyz/](https://rpc.dev0.fluentlabs.xyz/)
* **Explorer**: [https://blockscout.dev0.fluentlabs.xyz/](https://blockscout.dev0.fluentlabs.xyz/)

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
