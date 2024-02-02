---
description: Framework for Building on Fluent
---

# Build with Fluentbase

## Introduction

Fluentbase is a framework that introduces an SDK and a proving system for Fluent State Transition Functions (STF).&#x20;

{% hint style="success" %}
Fluentbase is in an earlier stage of development.

Access to Fluentbase SDK and its documentation is currently limited to projects involved in the Private Beta Testnet for testing purposes.&#x20;
{% endhint %}

## Fluentbase Runtimes

Fluentbase currently supports various runtimes, each serving specific functions:

* **crypto** (keccak256, poseidon)
* **ecc** (secp256k1 verify & recover)
* **evm** (sload/sstore opcode simulation)
* **rwasm** (transact, compile)
* **sys** (read, write, state, halt)
* **zktrie**

## Supported Languages

Fluentbase SDK currently supports writing smart contracts in:

* Rust
* Solidity
* Vyper

## Fluentbase Operation

Fluentbase operates using the [Fluent's rWasm VM (reduced WebAssembly)](introduction-to-fluent-vm.md). This VM employs 100% compatible WebAssembly binary representation, optimized for Zero-Knowledge (ZK) operations. The instruction set is reduced, and sections are embedded inside the binary to simplify the proving process.

### Limitations and Future Enhancements

As of now, Fluentbase does not support floating-point operations. However, this feature is on the roadmap for future enhancements.
