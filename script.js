function isOdd(number){
    if(number%2 ===0){
        return true;
    }else{
        return false
    }
   

}
console.log(isOdd(11))


function  rectangleArea (width,height){
return width*height;

}
console.log(rectangleArea(3,4))


function squareArra(width){
return rectangleArea(width,width)
}

console.log(squareArra(2))

function getRandomNumbers(){
return Math.random(0,100)
}
console.log(getRandomNumbers())

function getRandomNumbersFromRan(a,b){
return Math.random(a,b)
    }
 console.log(getRandomNumbersFromRan(3,5))
    
 function generateRandomNumbersArray(n){
 let mass = []
 for(let i=0;i<n;i++){
 mass[i] = getRandomNumbersFromRan(0,100);
        }
  return mass;
      }
 let mass = generateRandomNumbersArray(7);
 console.log(mass);

 function getMaxInArray(arr){
let max =0;
for(let i=0;i<arr.length;i++){
 if(arr[i]> max){
 max = arr[i]
      }
    }
return max;
  }
let max = getMaxInArray(generateRandomNumbersArray(7));
console.log(max);
