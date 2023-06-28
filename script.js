function toggleMode() {
    const html = document.documentElement

    //Comando feito apenas com um comando
    html.classList.toggle('light')


    // -----Comando feito manualmente!-----

    // if(html.classList.contains('light')) {
    // html.classList.remove('light')  
    // } else {
    // html.classList.add('light')  
    // }

    //Pegando a tag img
    const img = document.querySelector("#profile img")

    //Substituir a imagem
    if(html.classList.contains("light")) {
        //Se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/foto_light.png")
    } else {
        //Se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/foto_thaua.png")
    }
}