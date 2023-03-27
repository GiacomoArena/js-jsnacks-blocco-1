
const numero = 2
x = 1
let potenza = 0;

do{
  potenza =  Math.pow(numero, x);
  x++
  console.log(`2^ ${x} = ${potenza}`);
}while(potenza < 500);
