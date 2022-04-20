export class SearchBar extends HTMLElement {

    constructor() {
        super();
    }
    
    connectedCallback() {        
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
        .search { 
            background-color: #00B4CC; 
            width: 50%;
            display: flex;
            flex-direction: row;
            border-radius: 5px;
         }

        .search-bar {
            background: #00B4CC;
            border: 3px solid #00B4CC;
            border-radius: 5px 0 0 5px;
            width: 100%;
            height: 2rem;
            outline: none;
            font-size: 1.4rem;
            padding-left: 13px;
         }

        .search-btn {
            width: 40px;
            height: 36px;
            font-size: 25px;
            margin-top: 7px;
            margin-right: 11px;
            color: #fff;
        }

        .search-bar:focus {
            color: #fff;
        }

        button { 
            width: 40px;
            height: 36px;
            border: 1px solid #00B4CC;
            background: #00B4CC;
            text-align: center;
            border-radius: 0 5px 5px 0;
            font-size: 25px;
            cursor: pointer;
            margin-top: 4px;
            margin-right: 8px;
            color: #cfcfcf;
        }
        </style>
        <div class="search">
        <input type="text" class="search-bar"/>
        <button class="reset"><i class="fa-solid fa-rectangle-xmark"></i></button>
        <div class="search-btn">
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        </div>
        `;
    }
}

export class Results extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {        
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
        .results {
            margin-top: 6px;
            border-radius: 5px;
            width: 50%;
            cursor: pointer;
            color: grey;
            font-size: 1.3rem;
            background: #00B4CC;
        }
        .selected { 
            color: #00B4CC;
            background-color: rgba(255, 255, 255, 0.84);
            border-radius: 5px;
         }
        </style>
        <div class="results">
        </div>
        `;
    }
}

customElements.define("search-bar", SearchBar);
customElements.define("results-area", Results);
