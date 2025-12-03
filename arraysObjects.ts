/* 
Tengo un arreglo de usuarios (objetos). 
Devuélveme solo los nombres de los usuarios mayores de 18 años, ordenados alfabéticamente"
*/
interface Users {
  name: string;
  age: number;
}

const people: Array<Users> = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 18 },
  { name: "Charlie", age: 35 },
  { name: "Diana", age: 10 },
  { name: "Eve", age: 15 },
];

/* console.log(
  people
    .filter((age) => age.age >= 18)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((user) => user.name)
);  */

// intern level
/* 
Ejercicio 1: El "Carrito de Compras" (Arrays)
Tienes una lista de productos. Algunos están agotados (stock: 0). 
Tu Misión: Crea un nuevo arreglo que contenga:
    solo los nombres de los productos que sí tienen stock, 
    y conviértelos a mayúsculas.
*/
interface Products {
  name: string;
  stock: number;
}

const productsList: Array<Products> = [
  { name: "Laptop", stock: 10 },
  { name: "Mouse", stock: 0 },
  { name: "Teclado", stock: 5 },
  { name: "Monitor", stock: 0 },
];

/* console.log(
  productsList
    .filter((stock) => stock.stock > 0)
    .map((productName) => productName.name.toUpperCase())
); */

// trainee level
/* 
Agrupar por Categoría (Objetos)
Tienes una lista de estudiantes con su calificación. 
Tu Misión: Calcula el promedio general de la clase.
*/
interface Student {
  name: string;
  grade: number;
}

const students: Array<Student> = [
  { name: "Ana", grade: 80 },
  { name: "Beto", grade: 90 },
  { name: "Carla", grade: 100 },
  { name: "Daniel", grade: 70 },
];
/*
console.log(
   students.reduce((finalGrade, students) => finalGrade + students.grade, 0) /
    students.length
); */

// junior level
/* 
El "FizzBuzz" 
Tu Misión: Escribe una función que imprima los números del 1 al 50.
    Si es múltiplo de 3, imprime "Fizz".
    Si es múltiplo de 5, imprime "Buzz".
    Si es múltiplo de ambos (como 15), imprime "FizzBuzz".
    Si no, imprime el número.
    nota: Asegúrate de que tu lógica capture el 15, 30, 45 correctamente.
*/
function FizzBuzz() {
  for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}
console.log(FizzBuzz());
/* 
Encontrar Duplicados

Tienes un arreglo de números: 
    [1, 2, 3, 4, 2, 5, 6, 3]. 
    Tu Misión: Crea una función que devuelva:
        un nuevo arreglo solo con los números que se repiten.
    Resultado esperado: [2, 3]
*/
