"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// utils
function $(selector) {
    return document.querySelector(selector);
}
// DOM
var searchBar = $(".search-bar");
var resetBtn = $(".reset");
var resultArea = $(".results");
// methods
function startApp() {
    initEvents();
    resetBtnClick();
    focusOutInput();
}
// events
function initEvents() {
    searchBar.addEventListener('input', findInputValue);
}
function findInputValue(e) {
    resetResults();
    removeResetBtn();
    var timer;
    var value = e.target.value;
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
function resetBtnClick() {
    resetBtn.addEventListener('click', resetInput);
}
function resetResults() {
    resultArea.innerHTML = '';
}
function resetInput() {
    searchBar.value = '';
}
function focusOutInput() {
    searchBar.addEventListener('focusout', resetResults);
}
function showResetBtn() {
    resetBtn.classList.add('show');
}
function removeResetBtn() {
    console.log('remove');
    resetBtn.classList.remove('show');
}
// api
function fetchInfo(value) {
    var url = "https://5qfov74y3c.execute-api.ap-northeast-2.amazonaws.com/web-front/autocomplete?value=".concat(value);
    return fetch(url).then(function (response) {
        return response.json();
    });
}
function writeInfo(value) {
    return __awaiter(this, void 0, void 0, function () {
        var info;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchInfo(value)];
                case 1:
                    info = _a.sent();
                    setResultList(info);
                    return [2 /*return*/];
            }
        });
    });
}
function setResultList(data) {
    data.forEach(function (element) {
        var li = document.createElement('li');
        li.setAttribute('class', 'list-item');
        var span = document.createElement('span');
        span.textContent = element.text;
        li.appendChild(span);
        resultArea.append(li);
    });
}
startApp();
