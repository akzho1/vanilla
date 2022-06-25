// Event Loop

// const timeout= setTimeout(()=>{
//     console.log("after timeout");
// }, 2500);

// clearTimeout(timeout);

// const interval = setInterval(()=>{
//   console.log("after timeout");
// }, 1000);

// //clearInterval(timeout);

// const delay = (callback) => {
//   setTimeout(callback, wait);
// }

// delay(()=>{
//   console.log("after 2 seconds");
// }, 2000);

const delay = (wait = 1000) => {
   const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve()
     // reject("Что то пошло не так. Повторите попытку")
    }, wait)
  })
  return promise
}

// delay(2500)
// .then( () => {
//   console.log("after 2 seconds");
// })
// .catch( err => console.error("Error",err))
// .finally(()=> console.log("finally"));

const getData =() => new Promise (resolve => resolve([
  1, 1, 2, 3, 5, 8, 13
]))
// getData().then (data=> console.log(data))

async function asyncExample(){
 try {
  await delay(3000)
  const data = await getData();
  console.log("Data", data)
 } catch (error) {
  console.log(error);
 } finally {
  console.log("Finally")
 }
}
asyncExample();