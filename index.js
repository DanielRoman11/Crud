// Arreglo que almacena las personas creadas:
const personas = [
    {
        id: 1,
        nombre: "Daniel",
        apellido: "Román",
        edad: 21,
        correo: "dordone46758@universidadean.edu.co"
    },
    {
        id: 2,
        nombre: "Geraldine",
        apellido: "Rubiano",
        edad: 22,
        correo: "gcoca@unisanitas.edu.co"
    }
];

const crearTabla = (lista) => {
    let stringTabla = "<tr><th>ID</th><th>Nombre</th><th>Apellido</th><th>Edad</th><th>Correo</th></tr>";
    for(let persona of lista){
        let fila = "<tr> <td>"
        fila += persona.id;
        fila += "</td>"

        fila += "<td>"
        fila += persona.nombre;
        fila += "</td>"

        fila += "<td>"
        fila += persona.apellido;
        fila += "</td>"

        fila += "<td>"
        fila += persona.edad;
        fila += "</td>"

        fila += "<td>"
        fila += persona.correo;
        fila += "</td>"

        fila += "</tr>";
        stringTabla += fila;
    }
    return stringTabla;
};

document.getElementById("tabla-lectura").innerHTML = crearTabla(personas);