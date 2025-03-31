import { fetchData, fetchPostId } from "./js/services.js";
import {  template404, templateCard,  templatePost } from "./js/UI.js";

document.addEventListener("DOMContentLoaded", e => {
const $app = document.querySelector("#app");

const renderCards = (data) => {
  data.forEach(item => {
    $app.innerHTML += templateCard(item)
  })
}

const handleHome = async() => {
  try {
    const data = await fetchData()
    renderCards(data);
  } catch (error) {
    $app.innerHTML = "<h1>Error obteniendo la data</h1>"
  }
}

const handlePost = async (idPost) => {

    try {
      const post = await fetchPostId(idPost)
      if(post && post.title !== undefined){
        $app.innerHTML = templatePost(post);
      }else{
        $app.innerHTML = template404();
      }      
    } catch (error) {
      $app.innerHTML = "<h1>Error obteniendo los datos</h1>"
    }

    return;
}

const handleProducts = async () => {
  try {
    const module = await import("./pages/productos.js")
    const {html} = module.default();
    $app.innerHTML = html;
  } catch (error) {
    $app.innerHTML = "<h1>Error fetching data of products</h1>";
  }
}

const handleRoutes = async () => {
  const hash = window.location.hash;
  $app.innerHTML = "";

  if(!hash || hash === "#/"){
    await handleHome();
    return;
  }

  const postIdMatch = hash.match(/post\?id=(\d+)/);
  if(postIdMatch){
    const idPost = postIdMatch[1];
    await handlePost(idPost);
    return;
  }


  if(hash.includes("#productos")){
    await handleProducts();
    return;
  }

  $app.innerHTML = template404();

}

  handleRoutes();
  window.addEventListener("hashchange", handleRoutes)

})







