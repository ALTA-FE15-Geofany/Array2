function removeDuplicates(array: number[]): number {
    let i: number = 1
    while (i < array.length) {
        if (array[i] === array[i - 1]) {
            array.splice(i, 1)
        } else {
            i++
        }
    }
    return array.length
}




console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]))    // 4
console.log(removeDuplicates([2, 3, 4, 5, 6, 9, 9]))    // 6
console.log(removeDuplicates([2, 2, 2, 11]))            // 2
console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4])) // 4