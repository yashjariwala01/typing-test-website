import React from 'react'

const Practice = () => {

    const arr = [-6,20,8,-2,4];
const n = arr.length;

for(let i = 0; i < n ; i++){
    let boolean  = false;
    for(let j = 0 ; i < n-i-1; j++){
        if(arr[j] > arr[j+1]){
            boolean = true;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    if(!boolean){
        return;
    }
    console.log(arr[i])
}

console.log('hello world');

  return (
    <div>
      <h1>hello world</h1>
    </div>
  )
}

export default Practice
    