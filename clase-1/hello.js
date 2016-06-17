//un saludador recibe personas de tipo person
//una escuala saluda alumnos
//enteder la prog. de esa forma
//las clases son mayuscula
//las intancias siempre van estar en minusculas
//ejm:
//Ceviche es clase (instancia)
//cc
//ct
var Student = (function () {
    //en el constructor definimos caracteristicas
    function Student(name, middleName, lastName) {
        this.name = name;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = name + " " + middleName + " " + lastName;
        console.log('se ha creado el estudiante :' + this.fullName);
    }
    return Student;
}());
//person tiene 2 propiedades
function greeter(person) {
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
var user = new Student(" Jorge", " Luis", "Callalle");
var isOk = true;
var myNumber = 34;
var sayMyName = "Heisemberg";
var whoIshe = "Walter White is " + sayMyName;
console.log(whoIshe);
var list = [1, 2, 3];
var x;
x = ["hola", 10];
console.log(x);
//invocamos
// document.body.innerHTML = greeter(user);
//tenemos que hacer el proceso de transpilacion
// de typescrip a js
