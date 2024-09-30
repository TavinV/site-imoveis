fetch('db.json')
  .then(resposta => resposta.json())
  .then(dados => {
    const produtosDiv = document.getElementById('produtos');
    dados.casas.forEach(produto => {
      const card = document.createElement('div');
      card.innerHTML = `
        <a href="produto.html?cod=${produto.cod}" style="text-decoration: none; color: inherit;">
          <h3>${produto.titulo}</h3>
          <p>${produto.descrição}</p>
        </a>
      `;
      produtosDiv.appendChild(card);
    });
  });