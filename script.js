// 1. Capturando os quatro elementos criados no HTML
const elementoH1 = document.getElementById('titulo');
const elementoUl = document.querySelector('ul');
const elementoA = document.querySelector('a');
const elementoOl = document.getElementById('lista-ordenada');

// 2. Adicionando conteúdo textual simples usando .innerText
elementoH1.innerText = 'Bem-vindo ao mundo do JavaScript!';
elementoA.innerText = 'Visite a Proz Educação';

// 3. Adicionando três itens simples na lista NÃO ordenada (ul) usando .innerHTML
elementoUl.innerHTML = `
    <li>Aprender a lógica de programação</li>
    <li>Manipular elementos com o DOM</li>
    <li>Construir projetos dinâmicos</li>
`;

// 4. Adicionando três itens com links para outros sites na lista ORDENADA (ol) usando .innerHTML
elementoOl.innerHTML = `
    <li><a href="https://github.com" target="_blank">Acessar o GitHub</a></li>
    <li><a href="https://developer.mozilla.org" target="_blank">Consultar a MDN Web Docs</a></li>
    <li><a href="https://google.com" target="_blank">Pesquisar no Google</a></li>
`;