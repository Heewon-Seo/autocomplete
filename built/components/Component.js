var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SearchBar = /** @class */ (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar() {
        return _super.call(this) || this;
    }
    SearchBar.prototype.connectedCallback = function () {
        this.render();
    };
    SearchBar.prototype.render = function () {
        this.innerHTML = "\n        <style>\n        .search { \n            background-color: #00B4CC; \n            width: 50%;\n            display: flex;\n            flex-direction: row;\n            border-radius: 5px;\n         }\n\n        .search-bar {\n            background: #00B4CC;\n            border: 3px solid #00B4CC;\n            border-radius: 5px 0 0 5px;\n            width: 100%;\n            height: 2rem;\n            outline: none;\n            font-size: 1.4rem;\n            padding-left: 13px;\n         }\n\n        .search-btn {\n            width: 40px;\n            height: 36px;\n            font-size: 25px;\n            margin-top: 7px;\n            margin-right: 11px;\n            color: #fff;\n        }\n\n        .search-bar:focus {\n            color: #fff;\n        }\n\n        button { \n            width: 40px;\n            height: 36px;\n            border: 1px solid #00B4CC;\n            background: #00B4CC;\n            text-align: center;\n            border-radius: 0 5px 5px 0;\n            font-size: 25px;\n            cursor: pointer;\n            margin-top: 4px;\n            margin-right: 8px;\n            color: #cfcfcf;\n        }\n        </style>\n        <div class=\"search\">\n        <input type=\"text\" class=\"search-bar\"/>\n        <button class=\"reset\"><i class=\"fa-solid fa-rectangle-xmark\"></i></button>\n        <div class=\"search-btn\">\n        <i class=\"fa-solid fa-magnifying-glass\"></i>\n        </div>\n        </div>\n        ";
    };
    return SearchBar;
}(HTMLElement));
export { SearchBar };
var Results = /** @class */ (function (_super) {
    __extends(Results, _super);
    function Results() {
        return _super.call(this) || this;
    }
    Results.prototype.connectedCallback = function () {
        this.render();
    };
    Results.prototype.render = function () {
        this.innerHTML = "\n        <style>\n        .results {\n            margin-top: 6px;\n            border-radius: 5px;\n            width: 50%;\n            cursor: pointer;\n            color: grey;\n            font-size: 1.3rem;\n            background: #00B4CC;\n        }\n        .selected { \n            color: #00B4CC;\n            background-color: rgba(255, 255, 255, 0.84);\n            border-radius: 5px;\n         }\n        </style>\n        <div class=\"results\">\n        </div>\n        ";
    };
    return Results;
}(HTMLElement));
export { Results };
customElements.define("search-bar", SearchBar);
customElements.define("results-area", Results);
