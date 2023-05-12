//archivo llamado objetos.js que contenga las siguientes líneas

const miInfo = {
    nombre: "Edgar",
    apellido: "Xuc",
    edad: 22,
    altura: 1.68,
    eresDesarrollador: false,
  };
  
  const miEdad = miInfo.edad;
  
  // Lista con objetos de datos personales
  const listaDeAmigos = [
    miInfo,
    {
      nombre: "Ana",
      apellido: "García",
      edad: 24,
      altura: 1.68,
      eresDesarrollador: false,
    },
    {
      nombre: "Carlos",
      apellido: "López",
      edad: 21,
      altura: 1.80,
      eresDesarrollador: true,
    },
  ];
  
  // Lista ordenada por edad, de mayor a menor
  const listaOrdenadaPorEdad = listaDeAmigos.sort((a, b) => b.edad - a.edad);
  





