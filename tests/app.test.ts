import { fetchInfo, findInputValue, initEvents, writeInfo } from "../src/app";
import { eventModule } from "./event"

jest.useFakeTimers();

test("fetchInfo에 '가'를 넣으면 결과 배열을 반환한다", () => {

    const result = [{ "text": "가타카", "id": 1 }, { "text": "강철비", "id": 2 }, { "text": "강철비2", "id": 3 }, { "text": "기생충", "id": 4 }];

    fetchInfo("가").then((info) => {
        expect(info).toEqual({
            result
        });
    });
});

test('input 이벤트가 발생하면 해당 함수가 100ms에 1번 call 된다', () => {
    
    const instanceMock = jest.fn();

    document.addEventListener = jest
        .fn()
        .mockImplementationOnce((event, callback) => {
            callback();
        });

    jest.advanceTimersByTime(100);
    
    expect(document.addEventListener).toBeCalledWith(
        "input",
        expect.any(Function)
    );

    expect(instanceMock).toBeCalledTimes(1);
    
 });