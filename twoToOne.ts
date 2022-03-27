export class G964 {

    public static longest = (s1: string, s2: string) => {
        return Array
            .from(
                new Set([
                    ...s1.split(''),
                    ...s2.split('')
                ]))
            .sort()
            .join('')
    }
}
const a = "xyaabbbccccdefww"
const b = "xxxxyyyyabklmopq"
console.log(G964.longest(a, b))