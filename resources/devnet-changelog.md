---
description: >-
  All notable changes to Fluent's private beta testnet is documented in this
  section.
---

# Devnet Changelog

## Devnet Version 0 <a href="#devnet-version-0" id="devnet-version-0"></a>

_(Private)_

### Added: <a href="#added" id="added"></a>

* `rWasm` (reduced-Wasm) to generate a flattened binary representation of Wasm, ensuring backward compatibility with the Wasm instruction set.
* `Fluentbase` framework and Rust SDK designed for creating simple WebAssembly (Wasm) applications.
* `Fluent Network` client with support for Wasm apps.

### Unsupported: <a href="#unsupported" id="unsupported"></a>

* Modularity is not supported.
* `Fluentbase` SDK lacks support for floating-point operations.
* Standardization of code is pending; thus, passing block/tx context elements inside the app is currently not feasible.
* Doesn't support Solidity or Vyper for writing smart contracts.

***

## Devnet Version 1 <a href="#devnet-version-1" id="devnet-version-1"></a>

_(Priavte)_

### Added: <a href="#added-1" id="added-1"></a>

* Introduction of a new ABI codec to manage input/output parameters.
* Inclusion of input capabilities with block and tx context information (block hash, origin, caller, etc.).
* Full EVM compatibility with support for Solidity and Vyper languages.

### Changed: <a href="#changed" id="changed"></a>

* Might partially break backward compatibility with the previous version because it affects ABI encoding and requires recompilation of all previously deployed smart contracts.

### Unreleased: <a href="#unreleased" id="unreleased"></a>

* Planned support for L1/L2 messaging between Ethereum testnet and the Fluent network.

***

## Devnet Version 2  <a href="#devnet-version-2-current" id="devnet-version-2-current"></a>

_(Current / Public)_

### Added <a href="#added-2" id="added-2"></a>

* Introduction of Compatibility Contracts that brings support of forkless upgradable Wasm and EVM environments, allowing integration of additional execution runtimes like MoveVM and RISC-V.
* L1/L2 messaging between Ethereum testnet and the Fluent network.
* The new version of rWASM VM and compiler reduces compilation time, binary size, and execution time, while also addressing critical bug fixes.
  * It achieves 99% compliance with the official WebAssembly spec, with the exception of a few complex corner cases involving import tables and export globals that our execution environment cannot support.
* Interoperability between EVM and Wasm apps though Compatibility Contracts.

### Changed <a href="#changed-1" id="changed-1"></a>

* Updated to the latest version of revm/reth.
* Introduced a new codec for ABI encoding.
* Revised deployment scheme.
