export {};

declare global {
    // tslint:disable-next-line:interface-name
    interface String {
        toJadenCase(): string;
    }
}


String.prototype.toJadenCase = function (this: string): string {
    return this.split(' ')
        .map((word, index) => word
            .split('')
            .map((letter, index) => index === 0
                ? letter.toUpperCase()
                : letter)
            .join(''))
        .join(' ')
};

console.log('hey man wtf are you saying'.toJadenCase())