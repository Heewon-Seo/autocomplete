import { fetchInfo, debounce } from "../src/app";

jest.useFakeTimers();

it("fetchInfo에 '가'를 넣으면 결과 배열을 반환한다", () => {

    const result = [{ "text": "가타카", "id": 1 }, { "text": "강철비", "id": 2 }, { "text": "강철비2", "id": 3 }, { "text": "기생충", "id": 4 }];

    fetchInfo("가").then((info) => {
        expect(info).toEqual({
            result
        });
    });
});

it('debounce 함수에서는 500ms에 1번 함수가 호출된다', () => {

    const mockFn = jest.fn();

    const debounceFn = debounce(mockFn, 500);

    debounceFn();
    
    expect(mockFn).not.toBeCalled();

    jest.advanceTimersByTime(900);

    expect(mockFn).toBeCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);

 });