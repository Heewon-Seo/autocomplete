// interface
interface Info {
    text: string;
    id: number;
}

// utils
function $(selector: string) {
    return document.querySelector(selector)!;
}

// DOM
const searchBar = $(".search-bar") as HTMLInputElement;
const resetBtn = $(".reset") as HTMLButtonElement;
const resultArea = $(".results") as HTMLDivElement;

// methods
function startApp(): void {
    initEvents();
    resetBtnClick();
    focusOutInput();
}

// events
function initEvents(): void {
    searchBar.addEventListener('input', findInputValue);
}

function findInputValue(e: any): void {
    resetResults();
    removeResetBtn();

    let timer: any;
    let value: string = e.target.value;
    
    if (value !== null || value !== '') {
        showResetBtn();
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            writeInfo(value);
        }, 200);
    }
}

function resetBtnClick(): void {
    resetBtn.addEventListener('click', resetInput);
}

function resetResults(): void {
    resultArea.innerHTML = '';
}

function resetInput(): void {
    searchBar.value = '';
}

function focusOutInput(): void {
    searchBar.addEventListener('focusout', resetResults);
}

function showResetBtn(): void {
    resetBtn.classList.add('show');
}

function removeResetBtn(): void {
    resetBtn.classList.remove('show');
}

// api
function fetchInfo(value:string): Promise<Info[]> {
    const url = `https://5qfov74y3c.execute-api.ap-northeast-2.amazonaws.com/web-front/autocomplete?value=${value}`;
    return fetch(url).then(function(response){
        return response.json();
    });
}

async function writeInfo(value:string): Promise<void> {
    const info: Info[] = await fetchInfo(value);
    setResultList(info);
}

function setResultList(data:Info[]): void {
    data.forEach(element => {
        const li = document.createElement('li');
        li.setAttribute('class', 'list-item');
        const span = document.createElement('span');
        span.textContent = element.text;
        li.appendChild(span);
        resultArea.append(li);
    });
    
}

startApp();
