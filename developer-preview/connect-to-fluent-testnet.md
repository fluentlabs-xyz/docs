---
description: 'Fluent Developer Preview #02'
---

# Connect to Fluent Testnet

This is the second devnet version of the Fluent chain explicitly designed for deploying and interacting with Wasm-based smart contracts, utilizing a compatible go-Ethereum execution environment.&#x20;

{% hint style="info" %}
Due to the possible issues in the testnet implementations, we can reset network any time to upgrade it to more stable version.
{% endhint %}

***

## **Network Parameters**

<table><thead><tr><th width="265">Network Parameters</th><th>Resources</th></tr></thead><tbody><tr><td><strong>Network Name</strong></td><td>Fluent Developer Preview</td></tr><tr><td><strong>RPC URL</strong></td><td><a href="https://rpc.dev.thefluent.xyz/">https://rpc.dev.thefluent.xyz/</a></td></tr><tr><td><strong>Chain ID</strong></td><td>1337</td></tr><tr><td><strong>Symbol</strong></td><td>WZT</td></tr></tbody></table>

## Fluent Developer Preview Resources

<table><thead><tr><th width="266">Resources</th><th>Links</th></tr></thead><tbody><tr><td><strong>Faucet</strong></td><td><a href="https://faucet.dev.thefluent.xyz/">https://faucet.dev.thefluent.xyz/</a></td></tr><tr><td><strong>RPC</strong></td><td><a href="https://rpc.dev.thefluent.xyz/">https://rpc.dev.thefluent.xyz/</a></td></tr><tr><td><strong>Explorer</strong></td><td><a href="https://blockscout.dev.thefluent.xyz/"> https://blockscout.dev.thefluent.xyz/</a></td></tr></tbody></table>

***

## Supported Languages

Fluentbase SDK currently supports writing smart contracts in:

* Rust
* Solidity
* Vyper

Future iterations will introduce more language support.&#x20;

## Current Features and Limitations

In this version, the offering includes a basic Reth implementation, where the execution environment is substituted with rWASM. Notably, functionalities such as ZK or Rollup are not available at this stage.&#x20;

It's essential to acknowledge that significant changes might occur in the VM structure, host SDK, and execution layer in subsequent releases.
