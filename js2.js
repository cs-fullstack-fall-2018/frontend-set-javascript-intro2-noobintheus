var numberArray = [1, 2, 3, 4, 5, 6];
console.log(numberArray);

var sum = 0;

numberArray.splice(1,1);
numberArray.splice(2,1);

for(var x=0; x<numberArray.length; x++)
{
    console.log(numberArray[x]);
    sum += numberArray[x];
}

console.log(sum);