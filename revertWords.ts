// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

const input: string[] = [`This is an example!`, `double  spaces`];

export const reverse = (input: string): string => {
  const words: string[] = input.split(` `)
  const reverseWords: string[] = words.map((word) => word.split(``).reverse().join(''));
  return reverseWords.join(` `)
}

console.log(reverse(input[0]))