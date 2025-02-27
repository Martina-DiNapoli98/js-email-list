/* Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista. */

/* select the elemets of the DOM */
const listEl = document.querySelector(".list")
const btnEl = document.querySelector(".btn")
const arrowEl = document.querySelector(".arrow")
const refreshEl = document.querySelector("refresh")


/* create an event listener on the click */
btnEl.addEventListener("click", function(){
    /* create a loop for generate 10 different mails */
    for(let i = 0; i < 10; i++){
        listEl.innerHTML = ""
        /* API */
        fetch("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response => response.json())
        .then(data => {
        console.log(data.response);
            /* Create the elements of the list */
        const elementLi = document.createElement("li")
        /* Print the emails on the page" */
        elementLi.innerHTML = data.response
        listEl.appendChild(elementLi)
        /* deleted the arrow icon from the page*/
        arrowEl.classList.add("d-none")

    })
    }
    

})




