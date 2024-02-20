export const missingNumber = (numbers:number[]) => {
    const n = numbers.length 
    const range = Array.from(Array(n + 1).keys()).filter(number => !numbers.includes(number))
    return range[0]
}