import styled from "styled-components";

export const StyledAside = styled.aside`
    position: sticky;
    top: 0;
    left: 0;
    height: 100vh;
    width: calc(3vw + 3vh);

    div.side-wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: var(--primary-color);
    }

    div.side-wrapper-logo img {
        width: calc(3vw + 3vh);

        object-fit: cover;
    }
    ul.side-wrapper-social {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }

    ul.side-wrapper-social a {
        font-size: calc(1rem + 0.6667vw);
        color: white;
        padding-bottom: calc(3rem+ 0.6667vw);
        transition: color 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    ul.side-wrapper-social a:hover,
    ul.side-wrapper-social a:active{ 
        color:var(--secondary-color);
    }
`