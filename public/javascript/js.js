import Clientes from "../../models/Cliente";

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const currentDate = document.querySelector(".currentDate");
currentDate.innerHTML = `Novos pedidos foram realizados desde o último acesso ao sistema. Hoje é <strong>${day}/${month}/${year}</strong>.`;


//CONFIRMAÇÃO DO DELETAR
document
    .getElementById("btnExcluir")
    .addEventListener("click", function (event) {
        var confirmar = confirm("Tem certeza que deseja enviar o formulário?");
        if (confirmar) {
            window.location.href(
                `/clientes/delete/<%= cliente.id %>`
            );
        }
            return;
    });
