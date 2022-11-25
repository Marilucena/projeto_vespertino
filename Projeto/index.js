let inputNovaTarefa = document.querySelectorAll('#inputNovaTarefa');
let btnAddTarefa = document.querySelectorAll('#btnAddTarefa');
let listaTarefas = document.querySelectorAll('#listaTarefas');
let janelaEdicao = document.querySelector('#janelaEdicao');
let janelaEdicaoFundo = document.querySelector('#janelaEdicaoFundo');
let janelaEdicaoFechar = document.querySelector('#janelaEdicaoFechar');
let btnAtualizarTarefa = document.querySelectorAll('#btnAtualizarTarefa');
let idTarefaEdicao = document.querySelector('#idTarefaEdicao');
let inputTarefaNomeEdicao = document.querySelector('#inputTarefaNomeEdicao');

inputNovaTarefa.forEach(input => input.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        let listaIndex = 0
        inputNovaTarefa.forEach((element, index) => {
            if (input === element) {
                listaIndex = index
            }
        })
        let tarefa = {
            nome: inputNovaTarefa[listaIndex].value,
            id: gerarId(),
        }
        adicionarTarefa(tarefa, listaIndex);
    }
}));

janelaEdicaoBtnFechar.addEventListener('click', (e) => {
    alternarJanelaEdicao();
});

btnAddTarefa.forEach((button, index) => button.addEventListener('click', (e) => {

    let tarefa = {
        nome: inputNovaTarefa[index].value,
        id: gerarId(),
    }
    adicionarTarefa(tarefa, index);

}));

btnAtualizarTarefa.forEach(button => button.addEventListener('click', (e) => {
    e.preventDefault();

    let idTarefa = idTarefaEdicao.innerHTML.replace('#', '');

    let tarefa = {
        nome: inputTarefaNomeEdicao.value,
        id: idTarefa
    }

    let tarefaAtual = document.getElementById('' + idTarefa + '')

    if (tarefaAtual) {
        let li = criarTagLI(tarefa, tarefaAtual.parentNode);
        tarefaAtual.replaceWith(li)
        alternarJanelaEdicao();
    } else {
        alert('Elemento HTML não encontrado!')
    }

}));

function gerarId() {
    return Math.floor(Math.random() * 3000);
}

function adicionarTarefa(tarefa, index) {
    let li = criarTagLI(tarefa, listaTarefas[index].DOCUMENT_NODE);
    listaTarefas[index].appendChild(li);
    inputNovaTarefa[index].value = '';
}

function criarTagLI(tarefa) {
    let li = document.createElement('li');
    li.id = tarefa.id;

    let span = document.createElement('span');
    span.classList.add('textoTarefa');
    span.innerHTML = tarefa.nome;

    let div = document.createElement('div');

    let btnEditar = document.createElement('button');
    btnEditar.classList.add('btnAcao');
    btnEditar.innerHTML = '<i class="fa fa-pencil"></i>';
    btnEditar.setAttribute('onclick', 'editar(' + tarefa.id + ')')

    let btnExcluir = document.createElement('button');
    btnExcluir.classList.add('btnAcao');
    btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';
    btnExcluir.setAttribute('onclick', `excluir(${tarefa.id})`)

    div.appendChild(btnEditar);
    div.appendChild(btnExcluir);

    li.appendChild(span);
    li.appendChild(div);
    return li;

}

function editar(idTarefa) {
    let li = document.getElementById('' + idTarefa + '');
    if (li) {
        idTarefaEdicao.innerHTML = '#' + idTarefa;
        inputTarefaNomeEdicao.value = li.innerText;
        alternarJanelaEdicao();
    } else {
        alert('Elemento HTML não encontrado!')
    }
}

function excluir(idTarefa) {
    let confirmacao = window.confirm('Tem certeza que deseja excluir?');
    if (confirmacao) {
        const li = document.getElementById(idTarefa)
        if (li) {
            li.parentNode.removeChild(li)
        } else {
            alert('Elemento HTML não encontrado!')
        }
    }
}

function alternarJanelaEdicao() {
    janelaEdicao.classList.toggle('abrir');
    janelaEdicaoFundo.classList.toggle('abrir');
}

const list = document.querySelectorAll('.list');
    function activeLink(){
        list.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active');
    }
        list.forEach((item) =>
        item.addEventListener('click', activeLink));