import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont,"Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #212529;
  box-sizing: border-box;
}
* {
  box-sizing: inherit;
}
input, button, textarea {
  font-family: inherit;
}
html, body, #root {
  height: 100%;
}
// 포인트 컬로 변수로 생성
// 사용예시
  /* 컬러 수정 해야함 */
  /* color: var(--color-blue-600); */


/* @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap'); */
:root {
  --color-dark-0: #C1C2C5;
  --color-dark-1: #A6A7AB;
  --color-dark-2: #909296;
  --color-dark-3: #5c5f66;
  --color-dark-4: #373A40;
  --color-dark-5: #2C2E33;
  --color-dark-6: #25262b;
  --color-dark-7: #1A1B1E;
  --color-dark-8: #141517;
  --color-dark-9: #101113;

  --color-gray-0: #f1f3f5;
  --color-gray-1: #f1f3f5;
  --color-gray-2: #e9ecef;
  --color-gray-3: #dee2e6;
  --color-gray-4: #ced4da;
  --color-gray-5: #adb5bd;
  --color-gray-6: #868e96;

  
  /* mrdang green 이라는 뜻 */
  --color-mrgreen-0: #E5F9F1;
  --color-mrgreen-1: #BFF0DB;
  --color-mrgreen-2: #99E7C6;
  --color-mrgreen-3: #78dab0;
  --color-mrgreen-4: #67d5a7;
  --color-mrgreen-5: #479875;
  --color-mrgreen-6: #3a7a5f;
  --color-mrgreen-7: #388061;
  --color-mrgreen-8: #306a57;
  --color-mrgreen-9: #2B6653;

  --color-Primary: #2B6653;
  --color-onPrimary: #FBFBFB;
  --color-onPrimary-100: #f4f4f4;
  --color-onPrimary-200: #cccccc;

  --color-Surface: #f2f2f2;
  --color-onSurface: #1b1b1b;
  --color-onSurface-100: #D9D9D9;
  --color-onSurface-200: #B1B1B1;
  --color-onSurface-300: #686868;


  --color-Background: #1b1b1b;
  --color-onBackground: #383838;
  --color-onBackground-100: #9A9A9A;
  --color-onBackground-200: #5A5B5C;
  --color-onBackground-300: #3F3F40;

  --color-green-100: rgb(237, 255, 241);
  --color-green-300: rgb(80,118,81);
  --color-green-500: rgb(43, 102, 83);
  --color-green-700: #35644f;
  --color-green-900: rgb(32,68,52);

  --color-white-0: rgb(254, 254, 254);
  --color-white-100: #FBFBFB;

  --color-grey-100: rgb(236, 236, 236);
  --color-grey-200: #D9D9D9;

  --color-grey-300: rgb(139, 139, 139);
  --color-grey-400: rgb(90, 91, 92);
  --color-grey-500: rgb(41, 41, 41); 

  --font-NotoSans: 'Noto Sans KR';
  /* fontWeight 100, 300, 400, 500, 700, 900 있음 */
}
`;

export default GlobalStyles;
