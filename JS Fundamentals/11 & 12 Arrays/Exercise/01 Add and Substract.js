function solve(number) {

    let sum = 0;

while (number>0) {

  sum += parseInt(number %10);
  number = parseInt(number /10);


}

console.log(sum)
}