import styled from "styled-components"

export const StyledNav = styled.header`
    background-color: var(--secondary-color);
    height: calc(3vw + 3vh);
    z-index: 2;
    nav {
        height: 100%;
    }
    ul.nav-links{
        width:100%;
        height:100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    ul > li {
        padding-right: 3vw;
    }
    ul > li > a {
        position: relative;
        padding: 0.2rem 0.6rem;
        font-size: calc(1rem + 0.6667vw)
    }
    ul > li > a:link::before,
    ul > li > a:visited::before,
    ul > li > a:link::after,
    ul > li > a:visited::after {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height: 0.25rem;
        background-color: #fff;

        transform: scaleX(0);
        transition: transform 0.6s cubic-bezier(1, 0, 0, 1);
    }
    ul > li > a:link::before,
    ul > li > a:visited::before {
        top: 0;
        transform-origin: left;
    }
    ul > li > a:link::after,
    ul > li > a:visited::after {
        bottom: 0;
        transform-origin: right;
    }
    ul > li > a:hover::before,
    ul > li > a:active::before,
    ul > li > a:hover::after,
    ul > li > a:active::after {
        transform: scaleX(1);
    }

`