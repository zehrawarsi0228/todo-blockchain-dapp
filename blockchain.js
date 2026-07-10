const crypto = require("crypto");

class Block {
    constructor(index, data, previousHash = "") {
        this.index = index;
        this.timestamp = new Date().toLocaleString();
        this.data = data;
        this.previousHash = previousHash;
        this.completed = false;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return crypto
            .createHash("sha256")
            .update(
                this.index +
                this.timestamp +
                this.data +
                this.previousHash +
                this.completed
            )
            .digest("hex");
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, "Genesis Block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(data) {
        const previousBlock = this.getLatestBlock();

        const block = new Block(
            this.chain.length,
            data,
            previousBlock.hash
        );

        this.chain.push(block);
    }
}

module.exports = Blockchain;