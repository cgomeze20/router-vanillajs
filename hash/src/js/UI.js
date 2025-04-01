export const templateCard = (item) => {
    const htmlCard = `
    <div class="cardPost">
      <h3>${item.title}</h3>
      <p>${item.body}</p>
      <a class="detail" data-id="${item.id}" href="/#post?id=${item.id}">Ver mas</a>
    </div>
    `
    return htmlCard
  }


 export const templatePost = (item) => {
    const htmlCard = `
    <div class="cardPost">
      <h3>${item.title}</h3>
      <p>${item.body}</p>
      <a class="detail" href="#/">Volver</a>
    </div>
    `
    return htmlCard
  }


export const template404 = () => `
<div class="error">
  <h2>Error 404</h2>
  <p>Ooopss.... La página que buscas no existe.</p>
  <a href="#/">Volver a la página principal</a>
</div>
`;

export const templateErrorFetchingData = (msg="Error fetching data of products") => {
  return `<h1>${msg}</h1>`;
}