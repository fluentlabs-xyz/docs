# Get Started with Fluentbase SDK

## Introduction

Fluentbase is a framework that introduces an SDK and a proving system for Fluent State Transition Functions (STF). This documentation will walk you through the steps to create your own app using Fluentbase SDK.

## Fluentbase Runtimes

Fluentbase currently supports various runtimes, each serving specific functions:

* **crypto** (keccak256, poseidon)
* **ecc** (secp256k1 verify & recover)
* **evm** (sload/sstore opcode simulation)
* **rwasm** (transact, compile)
* **sys** (read, write, state, halt)
* **zktrie**

Developers are encouraged to use functions exclusively from the Fluentbase SDK. During proof computation, these functions are replaced with circuits optimized for efficiency.

## Fluentbase Operation

Fluentbase operates using the [rWasm VM (reduced WebAssembly)](../../introduction/introduction-to-fluent-vm.md). This VM employs 100% compatible WebAssembly binary representation, optimized for Zero-Knowledge (ZK) operations. The instruction set is reduced, and sections are embedded inside the binary to simplify the proving process.

### Limitations and Future Enhancements

As of now, Fluentbase does not support floating-point operations. However, this feature is on the roadmap for future enhancements.
