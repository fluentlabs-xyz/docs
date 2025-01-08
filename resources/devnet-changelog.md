---
description: All notable changes to Fluent's devnets is documented in this section.
---

# Devnet Changelog

## Devnet Version 0 <a href="#devnet-version-0" id="devnet-version-0"></a>

_(Private)_

### Added: <a href="#added" id="added"></a>

* `rWasm` (reduced-Wasm) to generate a flattened binary representation of Wasm, ensuring backward compatibility with the Wasm instruction set.
* `Fluentbase` framework and Rust SDK designed for creating simple Wasm-based applications.
* `Fluent Network` client with support for Wasm-based apps.

### Unsupported: <a href="#unsupported" id="unsupported"></a>

* `Fluentbase` framework lacks support for floating-point operations.
* Standardization of code is pending; thus, passing block/tx context elements inside apps is currently not feasible.
* Doesn't support Solidity or Vyper for writing smart contracts.

***

## Devnet Version 1 <a href="#devnet-version-1" id="devnet-version-1"></a>

_(Priavte)_

### Added: <a href="#added-1" id="added-1"></a>

* Introduction of a new ABI codec to manage input/output parameters.
* Inclusion of input capabilities with block and tx context information (block hash, origin, caller, etc.).
* Full EVM compatibility with support for Solidity and Vyper contracts.

### Changed: <a href="#changed" id="changed"></a>

* Might partially break backward compatibility with the previous version because it affects ABI encoding and requires recompilation of all previously deployed smart contracts.

### Unreleased: <a href="#unreleased" id="unreleased"></a>

* Planned support for L1/L2 messaging between Ethereum testnet and the Fluent network.

***

## Devnet Version 2  <a href="#devnet-version-2-current" id="devnet-version-2-current"></a>

_(Current / Public)_

### Added <a href="#added-2" id="added-2"></a>

* Introduction of the Compatibility Contracts (CCs) providing support for forkless and upgradable Wasm and EVM environments. The CCs are extensible to additional execution runtimes like MoveVM and RISC-V in the future.
* L1/L2 messaging between Ethereum testnet and the Fluent network.
* The new version of the rWASM VM and compiler reducing compilation time, binary size, and execution time, while also addressing critical bug fixes.&#x20;
  * It achieves 99% compliance with the official Wasm spec, with the exception of a few complex edge cases involving import tables and export globals that the execution environment cannot support.
* Interoperability between EVM and Wasm-based apps though the CCs.

### Changed <a href="#changed-1" id="changed-1"></a>

* Updated to the latest version of revm/reth.
* Introduced a new codec for ABI encoding.
* Revised the deployment scheme.
