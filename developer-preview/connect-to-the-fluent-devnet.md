---
description: Fluent Public Devnet
---

# Connect to the Fluent Devnet

This is the second devnet version of the Fluent L2, explicitly designed for deploying and interacting with EVM and Rust-based smart contracts. Solidity and Rust contracts can be deployed independently, or call each other as part of a [blended application](https://docs.fluentlabs.xyz/learn/developer-guides/building-a-blended-app) that utilizes both types of contracts.

{% hint style="info" %}
Due to possible issues in devnet implementations, we can reset the network at any time to upgrade it to a more stable version.
{% endhint %}

***

## **Network Parameters**

<table><thead><tr><th width="265">Network Parameters</th><th>Resources</th></tr></thead><tbody><tr><td><strong>Network Name</strong></td><td>Fluent Developer Preview</td></tr><tr><td><strong>RPC URL</strong></td><td><a href="https://rpc.dev.thefluent.xyz/">https://rpc.dev.thefluent.xyz/</a></td></tr><tr><td><strong>Chain ID</strong></td><td>20993</td></tr><tr><td><strong>Symbol</strong></td><td>ETH</td></tr></tbody></table>

## Fluent Developer Preview Resources

<table><thead><tr><th width="266">Resources</th><th>Links</th></tr></thead><tbody><tr><td><strong>Faucet</strong></td><td><a href="https://faucet.dev.thefluent.xyz/">https://faucet.dev.thefluent.xyz/</a></td></tr><tr><td><strong>RPC</strong></td><td><a href="https://rpc.dev.thefluent.xyz/">https://rpc.dev.thefluent.xyz/</a></td></tr><tr><td><strong>Explorer</strong></td><td><a href="https://blockscout.dev.thefluent.xyz/"> https://blockscout.dev.thefluent.xyz/</a></td></tr></tbody></table>

***

## Supported Languages

The Fluentbase SDK currently supports writing smart contracts in:

* Rust
* Solidity
* Vyper

Future iterations will introduce more language support.

## Current Features and Limitations

In this version, the offering includes a basic Reth implementation, where the execution environment is substituted with Fluent's VM, rWasm. Rollup and zk functionalities are not available at this stage.&#x20;

It's essential to note that significant changes might occur in the VM structure, host SDK, and execution layer in subsequent releases.
