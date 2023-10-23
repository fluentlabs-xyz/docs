---
description: Wasm and Zero-Knowledge Proofs
---

# Why Wasm in zkVM?

WebAssembly (Wasm) is a popular binary format that allows developers to run code written in multiple programming languages on the web.

However, security concerns have been raised about running untrusted code on the web. One approach to addressing this issue is to use Zero-Knowledge Proofs (ZKPs), a cryptographic technique that allows a user to prove a statement about their private data without revealing the data itself.

By combining WASM with ZKPs, developers can create applications that are both fast and secure.

## Why Wasm in ZKVM?

1. **High performance:** WASM allows good performance since it is designed to be as near to native machine code as feasible while remaining platform-independent.
2. **Small size:** WASM generates binary files that are tiny in size. This is an excellent fit for the blockchain world because smaller binaries result in less transaction data and thus lower gas fees.
3. **General VM & bytecode:** WASM was designed to be deployable in any browser and produce the same results. EVM, on the other hand, was created for a specific use case. As a result, more teams have been using WASM for various reasons and creating a wide range of tools and resources.
4. **Tooling and support:** As previously stated, the community has been developing tools and resources for WASM that are available to developers.
5. **Efficient JIT execution:** WASM natively supports 64 and 32-bit integer operations, allowing for efficient JIT execution. This is useful when executing 64-bit operations since it eliminates the need to decompose and simulate instructions. WASM, on the other hand, provides all numeric instructions with 64-bit capability that map one-to-one to CPU instructions.
6. **Minimalistic:** The formal specifications of a use case can easily fit on a single page.
7. **Deterministic execution:** WASM can easily be made deterministic by removing floating point operations, which is necessary for consensus algorithms.
8. **Supporting popular programming languages:** WASM supports C, C++, C#, Assembly Script, and Rust, avoiding developers to learn single-use case languages like Solidity.
