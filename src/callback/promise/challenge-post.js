import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1'

function postData (urlApi, data){
    const response = fetch (urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials : 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return response;
}
 const data = {
  "title": "New Product Course mine",
  "price": 9999,
  "description": "A description",
  "categoryId": 1,
  "images": ["https://placehold.co/600x400"]
}

postData(`${API}/products`, data)
.then(response => response.json())
.then( data => console.log(data))

// function operatios (a, b, oper){
//    if (oper === '+'){
//    return a + b

//    }else if (oper === '-'){
//     return a - b
//    }else if (operacion === '*') {
//     return num1 * num2;
//   } else if (operacion === '/') {
//     return num2 !== 0 ? num1 / num2 : 'Error: división por cero';
//   } else {
//     return 'Operación no válida';
//   }
   
// }


console.log(operatios(10, 5, 'suma'));  