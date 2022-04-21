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
            align-items: center;
            border-radius: 10px;
            padding: 3px;
         }

        .search-bar {
            background: #00B4CC;
            border: 3px solid #00B4CC;
            border-radius: 5px 0 0 5px;
            width: 100%;
            height: 2rem;
            outline: none;
            font-size: 1.4rem;
            color: #ddd;
            padding-left: 13px;
         }

        .search-btn {
            margin-left: 11px;
            color: #fff;
        }

        .search-bar:focus {
            color: #fff;
        }

        .reset-btn { 
            width: 40px;
            height: 36px;
            border: 1px solid #00B4CC;
            background: #00B4CC;
            text-align: center;
            font-size: 1rem;
            border-radius: 0 5px 5px 0;
            cursor: pointer;
            margin-right: 8px;
            color: #fff;
            visibility: hidden;
        }
        </style>
        <div class="search">
        <div class="search-btn">
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <input type="text" class="search-bar"/>
        <button class="reset-btn"><i class="fa-solid fa-rectangle-xmark"></i></ㅠ>
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
            background: #00B4CC;
            display: none;
            width: 50%;
            margin-top: 6px;
            padding: 4px;
            border-radius: 10px;
            cursor: pointer;
            font-size: 1.3rem;
            color: #ddd;
        }
        .selected { 
            color: #00B4CC;
            background-color: rgba(255, 255, 255, 0.84);
            border-radius: 10px;
         }
        </style>
        <div class="results">
        </div>
        `;
    }
}

customElements.define("search-bar", SearchBar);
customElements.define("results-area", Results);
