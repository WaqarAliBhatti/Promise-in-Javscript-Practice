const promise=new Promise((resolve,reject)=>{
    const error =false;
    if(!error){
        resolve('Promise has been fulfilled');
    }
    else{
        reject('Error: Operation has failed');
    }
})
console.log(promise);
promise
    .then(data=> console.log(data));
    promise.catch(err => console.log(err));

// console.log(os.release);