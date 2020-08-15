//procurar o botão
document.querySelector("#add-time")
//quando clicar no botão
.addEventListener('click', cloneField)

//executar uma ação
function cloneField(){
    //duplicar os campos. Que campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //pegar os campos: que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpa ele
        field.value = ""
    })
    
    //Colocar na página: onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)

}

     