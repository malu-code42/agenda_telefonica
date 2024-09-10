const form = document.getElementById('form');
const nomeAgenda = document.getElementById('nome');
const numeroTelefone = document.getElementById('numero');

const agenda = [];
const numero = [];
let linhas = '';

const reset = document.getElementById('reset');

form.addEventListener ('submit', function(e) {
    e.preventDefault();

    verificacaoAdicionarLinha();
    atualizaTableHTML();
})

function verificacaoAdicionarLinha () {
    if(agenda.includes(nomeAgenda.value)) {
        alert(`O nome ${nomeAgenda.value} ja foi incluído`)
    } else if (numero.includes(numeroTelefone.value)) {
        alert(`O telefone ${numeroTelefone.value} já foi incluído.`)
    } else {
        agenda.push(nomeAgenda.value);
        numero.push(numeroTelefone.value);

        let linha = '<tr>'
        linha += `<td> ${nomeAgenda.value} </td>`
        linha += `<td> ${numeroTelefone.value} </td>`
        '</tr>'

        linhas += linha
    }
}

function atualizaTableHTML () {
    const attTableHTML = document.querySelector ('tbody');
    attTableHTML.innerHTML = linhas;
}
