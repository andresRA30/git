const txtNombre = document.getElementById('txtNombre');
const txtApellido = document.getElementById('txtApellido')
const btnEnviar = document.getElementById('btnEnviar');
const resultado = document.getElementById('resultado');


btnEnviar.addEventListener("click", () => {
    console.log(txtNombre.value)
    resultado.innerHTML = `<h1>${txtNombre.value}</h1>`
});

class Persona {

    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
    }
}
class Trabajador extends Persona {
    constructor(puesto, area) {
        super('andres', 'robert')
        this.puesto = puesto
        this.area = area

    }
}
const p = new Persona('andres', 'robert');
const t = new Trabajador('Desarrollador de software', 'Pagos Digitales Emision');

console.log(p.nombre, p.apellido)
console.log(t.puesto, t.area, t.nombre, t.apellido)
console.log(t)