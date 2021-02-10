
class VigenereCipheringMachine {
    constructor(type = true) {
        this.type = type
        const obj = {}
        for (let i = 0; i < 26; i++) {
            obj[String.fromCharCode(97 + i)] = i
        }
        this.dict = obj
    }

    encrypt(message, key) {
        let res = ''
        let temp_key = key.toLowerCase()
        let temp_message = message.toLowerCase()
        for (let i = 0, j = 0; i < temp_message.length; i++, j++) {
            const letter = temp_message[i]
            if (j === temp_key.length) {
                j = 0
            }
            if (letter === ' ' || (temp_message.charCodeAt(i) > 123 || temp_message.charCodeAt(i) < 97)) {
                res += letter
                j -= 1
            } else {
                if (this.dict[letter] + this.dict[temp_key[j]] >= 26) {
                    res += String.fromCharCode(97 + this.dict[letter] + this.dict[temp_key[j]] - 26)
                } else {
                    res += String.fromCharCode(97 + this.dict[letter] + this.dict[temp_key[j]])
                }
            }
        }
        if (this.type) {
            return res.toUpperCase()
        } else {
            return res.split('').reverse().join('').toUpperCase();
        }

    }

    decrypt(encryptedMessage, key) {
        let temp_key = key.toLowerCase()
        let temp_message = encryptedMessage.toLowerCase()
        let res = ''
        for (let i = 0, j = 0; i < temp_message.length; i++, j++) {
            const letter = temp_message[i]
            if (j === temp_key.length) {
                j = 0
            }
            if (letter === ' ' || (temp_message.charCodeAt(i) > 123 || temp_message.charCodeAt(i) < 97)) {
                res += letter
                j -= 1
            } else {
                if (this.dict[letter] - this.dict[temp_key[j]] < 0) {
                    res += String.fromCharCode(97 + this.dict[letter] + 26 - this.dict[temp_key[j]])
                } else {
                    res += String.fromCharCode(97 + this.dict[letter] - this.dict[temp_key[j]])
                }
            }
        }
        if(this.type){
            return res.toUpperCase()
        }else{
            return res.split('').reverse().join('').toUpperCase();
        }
    }
}

module.exports = VigenereCipheringMachine;
