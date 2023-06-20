let NumA = prompt("Enter the first first number: ");
let A = Number(NumA);
let NumB = prompt("Enter the second number: ");
let B = Number(NumB);
let Sum = 0;

function isPrime(Num) {
    if (Num < 2) {
        return false;
      }

    for (let i = 2; i <= Math.sqrt(Num); i++) {
      if (Num % i === 0) {
        return false;
      }
    }
    return true;
  }

for (let N = A; N <= B; N++){
    if (isPrime(N)){
        console.log(N);
         Sum += N;
    }

    
}

console.log("Final Result: ", Sum);

prompt("Final Result: ", Sum);