/**
 * Created by kornelia on 05.01.17.
 */
/*
 TODO Testy, Dokumentacja
 */
//TODO: Siła hasła http://sortris.blogspot.com/2011/06/obliczanie-entropii-hasa.html

const Generator = {
    chars: {
        letters: 'qwertyuiopasdfghjklzxcvbn',
        caps: 'QWERTYUIOPASDFGHJKLZXCVBNM',
        digits: '1234567890',
        special: '`~!@#$%^&*()-_=+[{]}\\|;:\'\",<.>/?'
    },

    getRandomInt: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    },

    generatePasswordMap(charSet, passwordLength) {
        const passwordMap = [];
        for (let i = 0; i < passwordLength; i++) {
            const entity = [];
            const set = charSet[this.getRandomInt(0, charSet.length)];
            entity.push(set);
            entity.push(this.getRandomInt(0, this.chars[set].length));
            passwordMap.push(entity);
        }
        return passwordMap;
    },

    generateFullRandomPassword: function (passLength) {
        let password = '';
        let charset = this.chars.letters + this.chars.letters + this.chars.caps + this.chars.digits + this.chars.special;
        for (let i = 0; i < passLength; i++) {
            const a = this.getRandomInt(0, charset.length);
            password += charset[a];
        }
        return password;
    },

    generateSemiRandomPassword(passwordMap) {
        let password = '';
        for (let i = 0; i < passwordMap.length; i++) {
            const map = passwordMap[i];
            const chars = this.chars[map[0]];
            password += chars[map[1]];
        }
        return password;
    },

    getCharSet(hasCaps, hasDigits, hasSpecial) {
        let charsetNumbers = ['letters', 'letters', 'letters'];
        if (hasCaps) charsetNumbers.push('caps');
        if (hasDigits) charsetNumbers.push('digits');
        if (hasSpecial) charsetNumbers.push('special');
        return charsetNumbers;
    }
};
//export default Generator;
module.exports = Generator;
