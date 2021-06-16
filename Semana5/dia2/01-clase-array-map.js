/*
arreglo.map((elemento,indice?,arreglo?) =>{}
Metodo que recorre todos los elementos de un arreglo
-Por cada item, se ejecuta un callback que debemos pasar a la 
funcion map
-Por cada elemento del arreglo, el metodo map retorna
un nuevo elemento(obligatorio)
-Lo que quiere decir que el metodo map, retornara 
un arreglo con la misma cantidad de elementos del arreglo
original(pero no los mismos elementos necesariamente)
*/

let users = [
  {
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
  },
  {
    id: 4,
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
  },
];

let resultado = users.map((usuario, i) => {
  if (usuario.email.indexOf('gmail') >= 0) {
    return usuario.gmail;
  } else {
      return "sin gmail";
  }
});

console.log(resultado);