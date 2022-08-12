import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
        font-family: 'Alegreya Sans';
        font-weight: 400;
    }
`

export const colors = {
    primary: "#FA9BC8",
    secondary: "#D86FA1",
    third: "#ffb74d",
    thirdLight: "#ffe9ca",
    white: "#FFFFFF",
    black: "#000000",
}

