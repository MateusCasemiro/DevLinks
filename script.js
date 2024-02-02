function toogleMode() {
  //OPÇÃO PARA FAZER LIGHT MODE
  const html = document.documentElement
  html.classList.toggle("light")

  //pagando img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    //se tiver light mode imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //sem light mode imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  //substituir imagem
}
