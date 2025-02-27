/* Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista. */

const listEl = document.querySelector(".list")
const btnEl = document.querySelector(".btn")
const arrowEl = document.querySelector(".arrow")
const refreshEl = document.querySelector("refresh")



btnEl.addEventListener("click", function(){
    for(let i = 0; i < 10; i++){
        listEl.innerHTML = ""
        fetch("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response => response.json())
        .then(data => {
        console.log(data.response);

        const elementLi = document.createElement("li")
        elementLi.innerHTML = data.response
        listEl.appendChild(elementLi)
        arrowEl.classList.add("d-none")

    })
    }
    

})




