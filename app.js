const txtNombre = document.getElementById('txtNombre');
const btnEnviar = document.getElementById('btnEnviar');
const resultado = document.getElementById('resultado');


btnEnviar.addEventListener("click", () => {
    console.log(txtNombre.value)
    resultado.innerHTML = `<h1>${txtNombre.value}</h1>`
});