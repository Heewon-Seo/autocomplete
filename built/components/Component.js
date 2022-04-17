"use strict";
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
        // this.shadow = this.attachShadow({ mode: 'open' });
    }
    SearchBar.prototype.connectedCallback = function () {
        this.render();
    };
    SearchBar.prototype.render = function () {
        this.innerHTML = "\n        <div class=\"search\">\n        <input type=\"text\" class=\"search-bar\"/>\n        <button class=\"reset\">X</button>\n        </div>\n        ";
    };
    return SearchBar;
}(HTMLElement));
var Results = /** @class */ (function (_super) {
    __extends(Results, _super);
    function Results() {
        return _super.call(this) || this;
        // this.shadow = this.attachShadow({ mode: 'open' });
    }
    Results.prototype.connectedCallback = function () {
        this.render();
    };
    Results.prototype.render = function () {
        this.innerHTML = "\n        <div class=\"results\"></div>\n        ";
    };
    return Results;
}(HTMLElement));
customElements.define("search-bar", SearchBar);
customElements.define("results-area", Results);
