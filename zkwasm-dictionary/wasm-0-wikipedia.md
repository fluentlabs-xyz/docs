---
description: Short descriptions of Wasm(0) keywords referring to specific concepts
---

# Wasm(0) Wikipedia

### Binary-format
Binary code is a way of representing information using only two symbols - 0 and 1. 

It's like a secret code that computers use to communicate with each other. Each symbol, 0 or 1, is called a "bit". Different combinations of bits are used to represent different letters, numbers, or other types of data. 

For example, a string of 8 bits (also known as a "byte") can represent any of 256 possible values, allowing it to represent a wide variety of information. 

Binary code is the foundation of all computer software and hardware and is used to process and store information in a way that computers can understand.
### Halo 2
Halo 2 is a cryptographic proof system that is used to construct zero-knowledge proofs on a large scale. It is a framework that enables developers to create more efficient and secure zero-knowledge-proof systems.

It is based on the recursive proof composition technique, which enables multiple proofs to be composed into a single proof with a lower proof size and verification time.
### Portable
Meaning, a computer program can easily be run on different types of devices or platforms without needing a lot of extra work or adjustments. 

This is possible when the software is designed in a way that separates the main logic of the application from the specific details of the operating system it is running on. 

When software can be easily moved between different platforms, it can save time and money in development costs.
### Rollups
Roll-up is a scaling solution that is designed to greatly increase the transaction capacity of a blockchain network while reducing fees and improving user experience. It bundles many transactions together into a single batch, which is then processed off-chain by a Roll-up aggregator.

In a Roll-up, users can submit transactions to the Roll-up aggregator, which bundles them together and creates a single transaction on the base blockchain. This transaction includes proof that all the individual transactions in the Roll-up are valid, which allows the aggregator to process many transactions at once without having to verify each one individually on the base blockchain. 

This greatly reduces the transaction fees and processing time for users, while still ensuring the security and integrity of the network.
### SNARKs 
(*Succinct Non-Interactive Arguments of Knowledge*)

This proof system allows you to prove that you know something without revealing any additional information about it. 

It’s known for having a small proof size (the amount of data that is required to represent the proof), which makes it efficient and easy to transmit and verify. It’s also a non-interactive proof system, meaning that the prover and verifier don’t have to go back and forth during the proof generation process.

### Transactions Per Second
(*abbreviated TPS*)

Transactions Per Second (TPS) is a measure of the capacity or speed of a computer system to process a certain number of transactions in a given amount of time. 
In the context of blockchain technology, TPS refers to the number of transactions that a blockchain network can process per second. It is an important metric for evaluating the performance and scalability of a blockchain network.

The TPS of a blockchain network is determined by a number of factors, including the network's underlying consensus algorithm, the block size and frequency, and the overall network bandwidth. High TPS is desirable for blockchain networks that are used for high-volume transactions, such as payment processing and financial services. 

### WebAssembly
(*sometimes abbreviated Wasm*)

A universal low-level programming language used for web applications. 

It's the portable binary-format that is designed to be executable efficiently on a variety of operating systems and instruction set architectures. 
### Zero Knowledge
Zero Knowledge is a type of cryptography that allows one party to prove to another that they know a particular piece of information, without revealing the information itself. 

This can be useful for maintaining privacy and security in situations where sensitive information needs to be shared or verified, such as online transactions or authentication processes. 

Zero Knowledge protocols use complex mathematical algorithms to ensure that the proof is valid and that the information remains confidential.
### ZKEVM
(*Zero Knowledge Ethereum Virtual Machine*)

The Ethereum Virtual Machine (EVM) is the runtime environment that executes smart contracts on the Ethereum network. 

zkEVM is a modified version of the EVM that incorporates zero-knowledge proof systems, which allow smart contracts to be executed with greater privacy and security. With zkEVM, smart contracts can perform complex computations without revealing the underlying data to the network or to third parties.
### ZKWasm
(*Zero Knowledge WebAssembly*) 

ZKWasm is a new architecture that combines the benefits of Zero Knowledge proof systems with the WebAssembly (WASM) framework.

By combining these two technologies, zkWasm promises to provide a secure and private way to run decentralized applications (dApps) on the blockchain. 

It allows developers to write smart contracts that can execute complex calculations and transactions, without revealing any sensitive information to the blockchain network or to third parties. 

This enhances the privacy and security of dApps, and can lead to the development of new types of decentralized applications with novel features and capabilities.
