// fetch('https://dummyjson.com/products')
//     .then((res) => res.json())
//     .then((data) => {
//         let user = ""

//         data.products.forEach((u) => {
//             user += `
            
//                 <div class="card">
//                     <div class="img">
//                         <img src="${u.images[0]}" alt="">
//                     </div>
//                 <div class="content">
//                     <h3>${u.id}</h3>
//                     <h3>${u.title}</h3>
//                     <h5>price:- ${u.price}</h5>
//                 </div>
//                 </div>
//             `
//         });
//         document.getElementById("data").innerHTML = user
//     })

// let data={
//     id:1,
//     name:"moiz hussain",
//     age: 19
// }


// console.log(data["id"])

// for(key in data){
//     console.log(data[key])
// }


import header from "./header.js";
import footer from "./footer.js";


document.getElementById("header").innerHTML = header
document.getElementById("footer").innerHTML = footer
