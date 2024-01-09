class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"})
        shadow.innerHTML = "<h1>Oi</h1>";
    }

    build() {

    }

    style(){

    }
}

customElements.define("card-news",CardNews);