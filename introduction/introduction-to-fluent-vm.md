---
description: Fluent's approach to zkWasm
---

# Introduction to Fluent VM

At the core of Fluent lies our zkWasm VM.&#x20;

Here's an overview of Fluent's approach to zkWasm ↓

## **Overview**

Fluent VM is a modified version of the Wasm binary instruction format, specifically designed to enhance the efficiency, & ease of verification in smart contract execution.

Think of it as a reduced version of Wasm, we call it rWasm.

## Reduced-WebAssembly (rWasm)

The goal of rWasm is to create a flattened binary representation of Wasm that is backward compatible with the Wasm instruction set. This will make it easier to prove the correctness of Wasm programs and improve the overall efficiency by offering developers a more straightforward and zkSNARK-friendly environment while maintaining compatibility with the original instruction set.

## Advancements

{% tabs %}
{% tab title="Simplified Execution" %}
* rWasm eliminates relative offsets within the Wasm binary, facilitating a more direct and predictable execution flow
* It removes the necessity for a type mapping validator, enhancing the ease of validation
{% endtab %}

{% tab title="Enhanced Verification and Structure" %}
* Functions are combined into a single flat structure, simplifying the verification process and reducing the complexity of the binary format
* Function indices are replaced with bytecode positions, easing the correctness verification of the program counter (PC)
{% endtab %}

{% tab title="Binary Optimization" %}
* Replaced all sections with loader inside rWasm that 100% follows the same Wasm standards. It brings compatibility with all sections. Simulated sections, such as memory, table, data, and element segments, streamline the binary structure without compromising functionality
* Global section support is refined for both mutable and immutable variables, ensuring static verification of their correct usage
{% endtab %}
{% endtabs %}

Currently, rWasm achieves near-perfect and 100% compatibility with Wasm binaries, save for a few complex exports and imports that are not supported due to limitations in the host platform.

SIMD instructions are not supported.

While still in development, rWasm shows promise in simplifying the creation of zkSNARKs for Wasm applications.

## rWasm compared to Wasm

{% tabs %}
{% tab title="rWasm Features" %}
* rWasm has a more flattened structure without relative offsets
* rWasm does not require a type mapping validator
* rWasm must be executed as-is without any side effects like drop/keep and cannot apply any conditional state changes
* rWasm is easier to prove compared to original Wasm
* rWasm is a promising new technology with the potential to simplify the development of secure and efficient Wasm applications
{% endtab %}

{% tab title="Technical and implementation differences" %}
* Deterministic function order based on position in the codebase
* Function indices are replaced with program counter (PC) offset
* Block/loop statements are removed and replaced with Br/BrIf instructions
* Break instructions are redesigned to support PC offsets instead of depth-level
* All sections are removed and are simulated using rWasm instruction set
* Type mappings are no longer strictly required since code is validated
* Drop/keep ops are replaced with Get/Set/Tee local instructions
* Export section is not longer supported; the only way with rWasm is through the start section, however the export section can be simulated using routers
* Passive data/element segments are not supported, however it can be simulated using rWasm opcodes.
{% endtab %}
{% endtabs %}

## Wasm to rWasm Compilation and Execution

* **Compilation Process:** Wasm is compiled into rWasm, serving as the native format for Fluent's zkVM. However, for users, this compilation process remains transparent. Fluent embeds the rWasm compiler, allowing Ahead-of-Time (AOT) compilation. Once translated, the binary is stored in the account trie, eliminating the need for re-translation with each execution.
* **Automatic Migrations:** Within Fluent, all migrations from Wasm to rWasm and handling of Poseidon hashes occur automatically.&#x20;

> Developers remain unaware of the underlying rWasm or hash intricacies, ensuring a seamless development experience.

\
