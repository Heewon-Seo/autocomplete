
// caching
import { ApiCache } from './cache';
const apiCache = new ApiCache();

// interface
interface Info {
    text: string;
    id: number;
}

// utils
function $(selector: string) {
    return document.querySelector(selector)!;
}

function debounce(func: Function, delay: number) {
    let timer: number | undefined;
    return function (...args:any) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => func(...args), delay) as unknown as number;
    }
}

// DOM
const searchBar = $(".search-bar") as HTMLInputElement;
const resetBtn = $(".reset-btn") as HTMLButtonElement;
const resultArea = $(".results") as HTMLDivElement;

// methods
function startApp(): void {
    initEvents();
    resetBtnClick();
    focusOutInput();
    arrowKey();
    focusingResultArea();
}

// events
function initEvents(): void {
    searchBar.addEventListener('input', debounce(findInputValue, 500));
}

function resetBtnClick(): void {
    resetBtn.addEventListener('click', resetInput);
}

function focusOutInput(): void {
    searchBar.addEventListener('focusout', resetResults);
}

function arrowKey(): void {
    window.addEventListener('keydown', moveSelectedItem);
}

function focusingResultArea(): void {
    resultArea.addEventListener('mouseenter', focusingItem);
}

// functions
function findInputValue(e: Event): void {
    const target = e.target;
    if (!(target instanceof HTMLInputElement)) return;

    let value: string = target.value;

    if (value != '') {
        showResetBtn();
        writeInfo(value);
    } else {
        resetResults();
        removeResetBtn();
    }
}

function resetResults(): void {
    resultArea.classList.remove('show');
    resultArea.innerHTML = '';
}

function resetInput(): void {
    searchBar.value = '';
    removeResetBtn();
}

function showResetBtn(): void {
    resetBtn.classList.add('show');
}

function removeResetBtn(): void {
    resetBtn.classList.remove('show');
}

function moveSelectedItem(e: KeyboardEvent): void {

    if (resultArea.childElementCount > 0) {
        
        let selectedItem = $('.selected');
        let previousItem = selectedItem.previousElementSibling;
        let nextItem = selectedItem.nextElementSibling;

            if (e.keyCode === 38 && previousItem != null) {
                e.preventDefault();
                previousItem.classList.add('selected');
                searchBar.value = previousItem.firstChild?.textContent as string;
                selectedItem.classList.remove('selected');
            } else if (e.keyCode === 40 && nextItem != null) {
                e.preventDefault();
                nextItem.classList.add('selected');
                searchBar.value = nextItem.firstChild?.textContent as string;
                selectedItem.classList.remove('selected');
            }
        
    }
}

function focusingItem(): void {
    if (resultArea.childElementCount > 0) {

        const lists = Array.from(resultArea.children);

        lists.forEach(element => {

            // ???????????? resultArea??? ???????????? ???, ?????? ????????? ???????????? ?????????
            element.classList.remove('selected');

            element.addEventListener('mouseout', () => {
                element.classList.remove('selected');
            });

            element.addEventListener('mouseover', () => {
                element.classList.add('selected');
                searchBar.value = element.firstChild?.textContent as string;
            });

        });
    }
}

// api
function fetchInfo(value:string): Promise<Info[]> {
    const url: string = `https://5qfov74y3c.execute-api.ap-northeast-2.amazonaws.com/web-front/autocomplete?value=${value}`;
    console.log(url);
    if (apiCache.recordExists(url)) {
        return new Promise(resolve => 
            resolve(apiCache.get(url)));
    }
    return fetch(url).then(function(response: Response){
        let result = response.json();
        apiCache.set(url, result);
        return result;
    });
}

async function writeInfo(value:string): Promise<void> {
    const info: Info[] = await fetchInfo(value);
    if (info.length!==0) setResultList(info);
}

function setResultList(data:Info[]): void {
    resetResults();

    // id??? ???????????? selected class ??????
    let idArray: number[] = [];
    data.forEach(element => { idArray.push(element.id); });

    data.forEach(element => {
        const li = document.createElement('li');
        if (element.id == Math.min(...idArray)) {
            li.setAttribute('class', 'selected list-item');
        } else {
            li.setAttribute('class', 'list-item');
        }
        const span = document.createElement('span');
        span.textContent = element.text;
        li.appendChild(span);
        resultArea.append(li);
    });

    resultArea.classList.add("show");
}

// start app
document.addEventListener('DOMContentLoaded', () => {
    startApp();
});


export { fetchInfo, debounce, initEvents };
