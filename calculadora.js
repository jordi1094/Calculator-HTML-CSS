const pantalla = document.querySelector(".resultado");
const botones = document.querySelectorAll(".boton");

botones.forEach(boton =>{
    boton.addEventListener("click",() => {
        const botonApretado = boton.textContent;

        resulttado.textContent = botonApretado
    })
})
