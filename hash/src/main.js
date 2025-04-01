import { fetchData } from "./js/services.js";
import {  template404, templateCard,  templateErrorFetchingData,  templatePost } from "./js/UI.js";

document.addEventListener("DOMContentLoaded", e => {
const $app = document.querySelector("#app");

const renderCards = (data) => {
  data.forEach(item => {
    $app.innerHTML += templateCard(item)
  })
}

const handleHome = async() => {
  try {
    const data = await fetchData("https://jsonplaceholder.typicode.com/posts");
    renderCards(data);
  } catch (error) {
    $app.innerHTML = templateErrorFetchingData(error.message);
  }
}

const handlePost = async (idPost) => {

    try {
      const post = await fetchData("https://jsonplaceholder.typicode.com/posts/" + idPost)
      if(post && post.title !== undefined){
        $app.innerHTML = templatePost(post);
      }else{
        $app.innerHTML = template404();
      }      
    } catch (error) {
      $app.innerHTML = templateErrorFetchingData(error.message);
    }

    return;
}

const handleProducts = async () => {
  try {
    const module = await import("./pages/productos.js")
    const {html} = module.Productos();
    $app.innerHTML = html;
    if(module.js) module.js();
  } catch (error) {
    $app.innerHTML = templateErrorFetchingData();
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







