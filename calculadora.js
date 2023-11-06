const resultado = document.querySelector(".resultado");
const botones = document.querySelectorAll(".boton");

botones.forEach(boton =>{
    boton.addEventListener("click",() => {
        const botonApretado = boton.textContent;

        resultado.textContent = botonApretado;
    })
})