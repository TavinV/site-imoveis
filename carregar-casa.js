const params = new URLSearchParams(window.location.search);
const cod = params.get('cod');

fetch('db.json')
  .then(resposta => resposta.json())
  .then(dados => {
    console.log(dados)
    const produto = dados.casas.find(p => p.cod == cod);
    const detalhesDiv = document.getElementById('detalhes');
    if (produto) {
      detalhesDiv.innerHTML = `
        <h2>${produto.titulo}</h2>
        <p>${produto.descrição}</p>
        <p>Endereço: ${produto.enderço}</p>
        <p>Metragem: ${produto.metragem} m²</p>
      `;
    } else {
      detalhesDiv.innerHTML = `<p>Produto não encontrado.</p>`;
    }
  });