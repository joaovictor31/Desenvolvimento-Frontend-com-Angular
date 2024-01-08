//Programação orientada a objetos
class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"})
        shadow.innerHTML = "<h1> Seja bem vindo! </h1>";
    }
}

customElements.define('card-news', CardNews)
//DEPOIS VAMOS LINKAR ISSO NO MEU HTML 
//No script:src e adiciona o comando defer.
//primeiro cria a arvore depois adicona o defer