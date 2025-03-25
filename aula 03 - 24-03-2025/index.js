// ⚠️ NÃO ESQUECER QUE CADA LINHA TEM QUE SER COMENTADA FALANDO O QUE TA FAZENDO ⚠️

const nome = 'Gustavo';
const idade = 19;

const limiteTarefas = 4;

let listaDeTarefas = [
    {
        descricao: 'Fazer o trabalho de Fron-end o mais rapido que der antes que esqueça',
        completa: false,
    },
    {
        descricao: 'Fazer o trabalho de Fron-end o mais rapido que der antes que esqueça',
        completa: false,
    },
    {
        descricao: 'Fazer o trabalho de Fron-end o mais rapido que der antes que esqueça',
        completa: false,
    },

]

function saudarUsuario(nome, idade) {
    console.log(`
        Olá, ${ nome }, você tem ${ idade } anos.
    `);
    return;
}

function adicionarTarefa(descricao) {
    if (listaDeTarefas.length > limiteTarefas) return console.log('O limite já foi alcançado, não da pra adicionar mais itens.');

    listaDeTarefas.push({
        descricao: descricao,
        completa: false,
    });

    return;
}

function marcarComoCompleta(i) { // indice do item a ser marcado como completo ( se quiser fazer um UX mais entendivel da pra diminuir 1, pra então o cara só digitar, "excluir item 1" e deleta o item 0)
    if (listaDeTarefas && listaDeTarefas[i]) listaDeTarefas[i].completa = true;
}

function listarTarefas() {
    listaDeTarefas.forEach((item, i) => {
        console.log(`
            ${i + 1} - Tarefa: ${ item.descricao } | Status: ${ item.completa }.
        `);
    });

    return;
}

function removerTarefa(descricao) {
    listaDeTarefas = listaDeTarefas.filter(item => item.descricao !== descricao);
}

saudarUsuario(nome, idade);
adicionarTarefa('Testando, teste teste teste legal');
marcarComoCompleta(1);
listarTarefas();
removerTarefa('Fazer o trabalho de Fron-end o mais rapido que der antes que esqueça');
console.log('-----------')
listarTarefas();

if (listaDeTarefas.length > limiteTarefas) console.log('Você atingiu o limite de tarefas.');

