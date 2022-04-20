import { fetchInfo, findInputValue, initEvents, writeInfo } from "../src/app";

jest.useFakeTimers();

beforeEach(() => {

});

test("fetchInfo에 '가'를 넣으면 결과 배열을 반환한다", () => {

    const result = [{ "text": "가타카", "id": 1 }, { "text": "강철비", "id": 2 }, { "text": "강철비2", "id": 3 }, { "text": "기생충", "id": 4 }];

    fetchInfo("가").then((info) => {
        expect(info).toEqual({
            result
        });
    });
});

test('keypress fires callback', () => { 

    const input = global.document.createElement("input");
    input.classList.add("search-bar");
    global.document.body.appendChild(input);
    const searchBar = global.document.body.querySelector('.search-bar') as Element;
    searchBar.dispatchEvent(new Event('keydown'));

    initEvents();

    jest.advanceTimersByTime(200);

    expect(writeInfo).toHaveBeenCalled();
    expect(writeInfo).toBeCalledTimes(1);
    
 })

// test("info가 한번만 호출된다", () => {

//     for (let index = 0; index < 100; index++) {
//         findInputValue(func);
//     }

//     jest.advanceTimersByTime(200);

//     expect(func).toBeCalledTimes(1);

// });