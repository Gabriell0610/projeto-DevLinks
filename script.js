function toggleMode() {
  //pegando a tag html
  const html = document.documentElement
  html.classList.toggle("ligth")  
  //modo resumido do if e else. Quando a imagem tiver escura ele muda para ligth e quando estiver ligth muda para escuro

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //subistituir a imagem
  if (html.classList.contains("ligth")) {
      // se tiver em ligth mode, adicionar a imagem ligth
      img.setAttribute("src", "./Assets/Avatar-ligth-mode.png" )
  } else {
    // se tiver em dark mode, manter a mesma foto
      img.setAttribute("src", "./Assets/Avatar-dark-mode.png" )
  } 

  

 

}
