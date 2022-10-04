import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;500;600;700;800&family=Indie+Flower&display=swap');
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    :root {
        font-size:62.5%;

        --primary-color: #014d4e;
        --secondary-color: #ff9408;
        --secondary-color-alt: #ff94088e;
        --tertiary-color: #017374;
        --tertiary-color-alt: #01727498;
    }
    body {
        font-family: 'Baloo Tamma 2', cursive;
        line-height: 1.8;
        display: flex;
    }
`