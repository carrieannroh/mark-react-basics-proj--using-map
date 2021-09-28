function squareNumbers(numbers: number[]): number[] {
  // your code here
  return numbers.map(squareNumber);
}

function squareNumber(n: number): number {
  return n * n;
}

console.log(squareNumbers);

export { squareNumbers, squareNumber };
