# 자동 완성 Input

![image](https://user-images.githubusercontent.com/87118337/164482333-9cfee27b-d093-431d-ae7a-aae89d7a7d83.png)

## 실행 방법

```shell
# 패키지 설치
npm install

# 컴파일
npm run build

# 테스트
npm test
```

## 구현 내용

- [x] Fetch를 이용하여 Api를 호출 할 수 있다
- [x] Web Component를 사용하여 UI 요소 추상화
- [x] Api 결과 리스트는 마우스 포커스, 방향키로 포커싱 아이템을 움직일 수 있다
- [x] Api 결과는 캐싱되어 똑같은 결과가 매번 요청되지 않는다
- [x] Api 호출은 Input 이벤트 발생 시부터 500ms 후에 호출된다
- [x] 검색 Input은 초기화 버튼으로 초기화 될 수 있다
- [x] 초기화 버튼은 검색 Input이 비어있을 때는 표시되지 않는다

## 사용된 기술

- TypeSciprt
- Node.js
- Jest

## 사용한 패키지

### TypeScript

- typescript

코드 레벨에서 감지하기 힘들었던 버그 감지하기 위해 사용
타입을 미리 명시하므로 코드 자동완성의 정확도가 높아져 용이하다

### Babel

- @babel/cli
- @babel/core
- @babel/preset-typescript
- babel-plugin-add-import-extension

tsc 만으로는 compile 시 문제가 발생하여 사용
tsc로 compile 시, module에 확장자가 붙지 않아 인식이 되지 않았다
babel의 preset-typescript 및 add-import-extension 플러그인으로 해결하였다

### Jest

- jest
- @types/jest
- ts-jest
- whatwg-fetch

테스트 코드 작성을 위해 Jest 및 Jest에서 TypeScript를 정상 구동하기 위한 패키지들을 사용

### Web Component

- @webcomponents/custom-elements
  
Web Component로 UI 요소를 추상화 하기 위해 사용