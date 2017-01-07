/**
 * Created by kornelia on 05.01.17.
 */
/*
 TODO Testy, Dokumentacja
 */
//noinspection JSAnnotator
const Generator = {

    //TODO: Siła hasła http://sortris.blogspot.com/2011/06/obliczanie-entropii-hasa.html
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

    createSchema: function (hasCaps, hasDigits, hasSpecial) {
        let CharSet = [chars.letters];
        if (hasCaps) CharSet.add(chars.caps);
        else if (hasDigits) CharSet.add(chars.digits);
        else if (hasSpecial) CharSet.add(chars.special);
        return CharSet;
    },

    generateRandomPassword: function (passLength) {
        let password = '';
        let charset = chars.letters + chars.caps + chars.digits + chars.special;
        for (let i = 0; i < passLength; i++) {
            const a = getRandomInt(0, charset.length);
            password += charset[a];
        }
        console.log(password);
        return password;
    }

};

