const input = document.getElementById('input')
const btnAdicionar = document.getElementById('button')

function ajusteCaractere() {
    const body = document.body.clientWidth
    
    if(body < 600) {
        input.maxLength = 20
    }else {
        input.maxLength = 60
    }
}
window.addEventListener('load', ajusteCaractere);
window.addEventListener('resize', ajusteCaractere);


function funcionalidade() {
    const conteudo = input.value.trim() 
    
    if(conteudo){
        const novoItem = document.createElement('li')
        novoItem.className = 'flex border-2 mb-1 border-green-500'
        const paragrafo = document.createElement('p')
        paragrafo.className = 'w-full px-3'
        paragrafo.textContent = conteudo
        const btnEditar = document.createElement('button')
        btnEditar.className = 'bg-green-800 px-2 rounded-sm text-white'
        btnEditar.textContent = 'Editar'
        const btnExcluir = document.createElement('button')
        btnExcluir.className = 'bg-red-800 px-2 rounded-sm text-white'
        btnExcluir.textContent = 'Excluir'
        btnExcluir.id = 'excluir'

        novoItem.appendChild(paragrafo)
        novoItem.appendChild(btnEditar)
        novoItem.appendChild(btnExcluir)

        const lista = document.getElementById('lista')
        lista.appendChild(novoItem) 
        input.value = ''   
        input.focus()

        btnExcluir.addEventListener('click', () => {
            novoItem.remove()
            input.focus()
        })

        btnEditar.addEventListener('click', () => {
            input.value = paragrafo.textContent
            novoItem.remove()
            input.focus()
        })


    }
    
}
btnAdicionar.addEventListener('click', funcionalidade)

