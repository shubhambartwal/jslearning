// axios is external liberary
//fetch is inbuild 
//popular way is axios 

//  function main(){
//     fetch("https://sum-server.100xdevs.com/todos")
//     .then(async response=>{
//         const json=await response.json()
//    console.log(json)
//     })
// }
// main()

async function main(){
    const response= await fetch("https://sum-server.100xdevs.com/todos",{
        method:"PUT"
    });
    const json= await response.json()
    console.log(json)
}
main()
// we have to provide method in case of fetch fro put post delete


//axios 
// const axios=require('axios')
// async function main(){
//     const response=await axios.get("https://sum-server.100xdevs.com/todos")
//     // no need to write this line in case of axios// const json=await response.json()//axois is smart enough to understand the dasta we are getting is json

//     console.log(response.data)
// }
// main()

// just do axois.get axois.post axois.put axois.delete


//headers we have to provide in both method 