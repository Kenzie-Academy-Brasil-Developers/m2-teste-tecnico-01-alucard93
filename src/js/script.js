const ul = document.querySelector(".container")

function MontarListaProdutos (listaProdutos) {
    ul.innerHTML = "";
    listaProdutos.forEach((produto) => {
        const li = document.createElement("li")
        const img = document.createElement("img")
        const h2 = document.createElement("h2")
        const h3 = document.createElement("h3")
        const p = document.createElement("p")

        img.src = produto.urlImage
        h2.innerHTML = produto.nome
        h3.innerHTML = produto.idade
        p.innerHTML = produto.bio


        li.classList.add("card")

        li.appendChild(img)
        li.appendChild(h2)
        li.appendChild(h3)
        ul.appendChild(li)

    })
}
MontarListaProdutos(pessoas)