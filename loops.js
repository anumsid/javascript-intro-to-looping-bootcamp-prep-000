function forLoop (array) {
  for(var i=0; i<25; i++){
    array.push('I am ${i} strange loops.')
  }
  return array
}


function whileLoop (number){
  while (number>0){
    console.log(--number)
  }
  return 'done'
}

function doWhileLoop(array) { 
  function maybeTrue() { 
     return Math.random() >= 0.5   }  
 do { 
   array = array.slice(1) 
 } while (array.length > 0 && maybeTrue())  
  return array 
}

// function doWhileLoop (array){
//   do {remove elements from the
//     array until the array is empty}
//     while(array.length > 0 && maybeTrue())
//   return array
// }
