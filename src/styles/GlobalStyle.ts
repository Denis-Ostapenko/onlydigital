import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import HelveticaNeueBoldWoff from "../fonts/HelveticaNeue-Bold/HelveticaNeueCyr-Bold.woff";
import HelveticaNeueBoldTtf from "../fonts/HelveticaNeue-Bold/HelveticaNeueCyr-Bold.ttf";
import HelveticaNeueBoldWoff2 from "../fonts/HelveticaNeue-Bold/HelveticaNeueCyr-Bold.woff2";
import HelveticaNeueBoldEot from "../fonts/HelveticaNeue-Bold/HelveticaNeueCyr-Bold.eot";
import HelveticaNeueRomanWoff from "../fonts/HelveticaNeue-Roman/HelveticaNeueCyr-Roman.woff";
import HelveticaNeueRomanWoff2 from "../fonts/HelveticaNeue-Roman/HelveticaNeueCyr-Roman.woff2";
import HelveticaNeueRomanTtf from "../fonts/HelveticaNeue-Roman/HelveticaNeueCyr-Roman.ttf";
import HelveticaNeueRomanEot from "../fonts/HelveticaNeue-Roman/HelveticaNeueCyr-Roman.eot";

const GlobalStyle = createGlobalStyle`
${normalize}

@font-face {
  font-family: "Helvetica Neue";
  src:url(${HelveticaNeueRomanEot});
  src:url(${HelveticaNeueRomanWoff2}) format('woff2'),
  url(${HelveticaNeueRomanWoff}) format('woff'),
  url(${HelveticaNeueRomanTtf}) format('truetype');
  font-style: normal;
  font-weight: 400;
}
@font-face {
  font-family: "Helvetica Neue";
  src:url(${HelveticaNeueBoldEot});
  src:url(${HelveticaNeueBoldWoff2}) format('woff2'),
  url(${HelveticaNeueBoldWoff}) format('woff'),
  url(${HelveticaNeueBoldTtf}) format('truetype');
  font-style: normal;
  font-weight: 700;
}

* {
    box-sizing: border-box;
}
body {
    margin: 0;
    width: 100vw;
    height: 100vh;
    font-family: "Helvetica Neue";
}
`;
export default GlobalStyle;
