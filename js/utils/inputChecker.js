

export const inputChecker = {

    inputAdjust(input) {
        let adjustedInput = input
            .normalize('NFD')
            .replace(/([.!?]+)(?=\S)/g, "$1 ")
            .trim();
        return adjustedInput;
    },

    isFieldEmpty(input) {
        return (input === '' || input == null);
    },

    isAnyDigitsOrSymbols(name) {
        const nameRegExpDig = /\d/g;
        const nameRegExpSymbols = /\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\"|"|\;|\:/g;
        return ((nameRegExpDig.test(name)) || (!isNaN(name)) || nameRegExpSymbols.test(name));
    },

    isEmailValid(email) {
        const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegExp.test(email);
    },

    isPhoneValid(phone) {
        const phoneRegExp = /^\s*((\+?\s*(\(\s*)?3)?[\s-]*(\(\s*)?8[\s-]*)?(\(\s*)?0[\s\-\(]*[1-9][\s-]*\d(\s*\))?([\s-]*\d){7}\s*$/;
        return phoneRegExp.test(phone);
    },

}
