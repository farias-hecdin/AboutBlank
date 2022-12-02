// Capturando elementos
const $table = document.getElementById("id_table");

function tarea({ elem1, elem2 }) {
  let res = elem1 + elem2;
  console.warn(res);
}

const obj = {
  elem1: "Hola",
  elem2: "mundo",
};

tarea(obj);
