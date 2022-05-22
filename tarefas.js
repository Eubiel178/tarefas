function addTarefa() {
    window.event.preventDefault()
    let tarefa = window.document.querySelector("#tarefas").value

    let listaTarefa = window.document.querySelector("#lista-tarefas")
    let listaTarefaSize = listaTarefa.children.length

    if (tarefa != "" && tarefa.length > 4) {
        if (listaTarefaSize <= 10) {
            let newElementLista = window.document.createElement("li")
            let botaoRemover = window.document.createElement("button")
            botaoRemover.innerText = "Remover" 
    
            botaoRemover.setAttribute("class", "botao-remover delete-item item-add")
            botaoRemover.setAttribute("onclick", "remover()")
            newElementLista.setAttribute("class", "delete-item item-add")
    
            newElementLista.innerText = tarefa
    
            newElementLista.appendChild(botaoRemover)
            listaTarefa.appendChild(newElementLista)
        }
    }
}

function remover() {
    window.document.querySelector(".delete-item").remove()
}