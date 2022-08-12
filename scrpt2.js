// // const loadData = document.querySelector(".products");

// // loadData.addEventListener('load',getData)

// //const result = fetch('data.json').then(response=>response.json())
// let result=""
// function getData(){
    
//     fetch('data.json').then(response=>{
//         response.json()
//     })
//     .then(data =>{
//            JSON.parse(data)
//     })
//         .then(contents=>{
//             for(let item of contents){
//                 result +=`
//                 <div class=products'>
//                     <img src ="${item.productsImages}" alt="" >
//                     <p class ="gender">${item.gender}</p>
//                     <p class ="price">
//                         <span>${item.price}</span>
//                         <span>&euro;</span>
//                     </p>
//                 </div>
//                 `

//             }

            
//         })
//         .then(output=>{
//            return document.querySelector(".products").innerHTML=output;

//         })
// }

// document

    