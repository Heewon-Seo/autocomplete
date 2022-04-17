class SearchBar extends HTMLElement {

    constructor() {
        super();
        // this.shadow = this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {        
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="search">
        <input type="text" class="search-bar"/>
        <button class="reset">X</button>
        </div>
        `;
    }
}

class Results extends HTMLElement {
    constructor() {
        super();
        // this.shadow = this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {        
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="results"></div>
        `;
    }
}

customElements.define("search-bar", SearchBar);
customElements.define("results-area", Results);
