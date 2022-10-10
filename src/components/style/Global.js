import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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
        font-family: "Baloo Tamma 2", cursive;
        line-height: 1.8;
    }
    li {
        list-style-type: none;
    }
    a,
    a:link,
    a:visited {
        text-decoration: none;
        color: #fff;
        font-size: 1.5rem;
    }
`