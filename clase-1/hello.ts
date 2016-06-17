//un saludador recibe personas de tipo person
//una escuala saluda alumnos
//enteder la prog. de esa forma

interface Person {
  name: string;
  lastName: string;
}

//las clases son mayuscula
//las intancias siempre van estar en minusculas
//ejm:
//Ceviche es clase (instancia)
//cc
//ct

class Student {
  fullName: string;
  //en el constructor definimos caracteristicas
  constructor (public name, public middleName, public lastName){
    this.fullName = name + " " + middleName + " " + lastName;
    console.log('se ha creado el estudiante :' +this.fullName)
  }
}

//person tiene 2 propiedades
function greeter(person: Person){
  return "Hola " + person.name + " " + person.lastName;
}

//var user = "Jorge Callalle";
//var user = 3;
//lo que son var son objetos

//var user = ['0','1','2'];

// var user = {
//   name : "Pancho",
//   lastName : "Pantera"
// }

var user = new Student(" Jorge"," Luis", "Callalle");
let isOk: boolean = true;
let myNumber: number = 34;
let sayMyName: string = "Heisemberg";
let whoIshe: string = `Walter White is ${sayMyName}`;
console.log(whoIshe);

let list: number[] = [1,2,3]

let x : [string, number];

x = ["hola", 10]

console.log(x);

//invocamos
// document.body.innerHTML = greeter(user);

//tenemos que hacer el proceso de transpilacion
// de typescrip a js
