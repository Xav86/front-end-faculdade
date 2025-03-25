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
    if (lista.length > limiteTarefas) return console.log('O limite já foi alcançado, não da pra adicionar mais itens.');

    listaDeTarefas.push({
        descricao: descricao,
        completa: false,
    });

    return;
}

function marcarComoCompleta(i) { // indice do item a ser marcado como completo ( se quiser fazer um UX mais entendivel da pra diminuir 1, pra então o cara só digitar, "excluir item 1" e deleta o item 0)
    listaDeTarefas[i].completa = true;
}

function listarTarefas() {
    listaDeTarefas.forEach(item => {
        console.log(item);
    });

    return;
}

function removerTarefa(descricao) {
    listaDeTarefas = listaDeTarefas.filter(function (item) {
        return item.descricao === descricao;
    });
}

saudarUsuario(nome, idade);
marcarComoCompleta(1);
listarTarefas();
removerTarefa('Fazer o trabalho de Fron-end o mais rapido que der antes que esqueça');
listarTarefas();


