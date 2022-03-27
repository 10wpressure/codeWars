export function accum(s: string): string {
    return s.split('')
        .map((letter: string, index: number) => letter.toUpperCase() + (letter.toLowerCase()).repeat(index))
        .join('-')
}

console.log(accum('abcd'))