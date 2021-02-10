
const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length
    },
    addLink(value) {
        if (typeof value === 'undefined') {
            this.chain.push('( )');
        } else
            this.chain.push('( ' + value + ' )');
        return this
    },
    removeLink(position) {
        if (typeof position !== 'number' || (position < 1 && position > this.getLength())) {
            this.chain = []
            throw Error
        }
        this.chain = this.chain.filter((el, index) => index !== position - 1)
        return this
    },
    reverseChain() {
        this.chain = this.chain.reverse()
        return this
    },
    finishChain() {
        const res = this.chain.join('~~')
        this.chain = []
        return res
    }
};

module.exports = chainMaker;
