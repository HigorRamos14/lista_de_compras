const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras")
const botaoAdicionar = document.getElementById("adicionar-item");
let contador = 0;

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();

    if (inputItem.value === "") {
        alert("Por Favor, insira um item!");
        return
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    inputCheckbox.addEventListener("click", function() {
        if(inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none";
        }
    })

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);
    listaDeCompras.appendChild(itemDaLista);

    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
            weekday: "long"
        }
    );
    const data = new Date().toLocaleDateString("pt-BR"); 
    const hora = new Date().getHours();
    const minutos = new Date().getMinutes();

    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}:${minutos}`;
   

    const textoData = document.createElement("p");
    textoData.innerText = dataCompleta;
    itemDaLista.appendChild(textoData);
    textoData.classList.add("texto-data");


    verificarListaVazia();
})

const mensagemListaVazia = document.querySelector(".mensagem__lista-vazia");

function verificarListaVazia() {
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    if (itensDaLista.length === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}