function meanMedian(arrayInput: number[]): string {
    const length: number = arrayInput.length
    const mean: number = arrayInput.reduce((sum, num) => sum + num, 0) / length
    const roundedMean: number = Math.round(mean * 10) / 10

    let median: number
    if (length % 2 === 0) {
        const tengahIndex1: number = length / 2 - 1
        const tengahIndex2: number = length / 2
        median = (arrayInput[tengahIndex1] + arrayInput[tengahIndex2]) / 2
    } else {
        const midIndex: number = Math.floor(length / 2)
        median = arrayInput[midIndex]
    }

    const roundedMedian: number = Math.round(median * 10) / 10

    return `${roundedMean} ${roundedMedian}`
}

console.log(meanMedian([1, 2, 3, 4]))          // Output: 2.5 2.5
console.log(meanMedian([1, 2, 3, 4, 5]))       // Output: 3 3
console.log(meanMedian([7, 8, 9, 13, 15]))     // Output: 10.4 9
console.log(meanMedian([10, 20, 30, 40, 50]))  // Output: 30 30
console.log(meanMedian([15, 20, 30, 60, 120])) // Output: 49 30
