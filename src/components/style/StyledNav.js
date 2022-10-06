import styled from "styled-components"

export const StyledNav = styled.header`
    background-color: var(--secondary-color);
    height: calc(3vw + 3vh);
    z-index: 2;
    nav {
        height: 100%;
    }
    ul{
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
        font-size: calc(1rem + 0.6667vw);

        :link::before, :visited::before, :link::after, :visited::after {
            content: '';
            position: absolute;
            left: 0;
            width: 100%;
            height: 0.25rem;
            background-color: #fff;

            transform: scaleX(0);
            transition: transform 0.6s cubic-bezier(1, 0, 0, 1);
        }

        :link::before, :visited::before {
            top: 0;
            transform-origin: left;
        }
        :link::after, :visited::after {
            bottom: 0;
            transform-origin: right;
        }

        :hover::before, :active::before, :hover::after, :active::after {
            transform: scaleX(1);
        }
    }

    @media (max-width:610px) {
        position: absolute;

        nav {
            width: 30rem;
            height: 100%;
            position: fixed;
            top: 0;
            right: -30rem;
            background-color: var(--secondary-color);
            text-align: center;
            transition: all 0.4s ease-in-out;
        }
        nav.active {
            right: 0rem;
        }
        div.nav-hamburger {
            width: 5rem;
            height: 5rem;
            position: fixed;
            top: 2rem;
            right: 3rem;
            cursor: pointer;
            background-color: var(--secondary-color);
            padding: 1rem;
            border-radius: 50%;
            
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
        .line {
            width: 100%;
            height: 0.3rem;
            background-color: #fff;
            border-radius: 0.2rem;
            transition: all 0.4s ease-in-out;
        }
         .active .line-1 {
           transform: rotateZ(-405deg) translate(-0.8rem, 0.6rem);
         }
     
         .active .line-2 {
           opacity: 0;
         }
     
         .active .line-3 {
           transform: rotateZ(405deg) translate(-0.8rem, -0.6rem);
         }
        ul {
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
        }
        ul > li {
            margin-bottom: 4vh;
            margin-left: 6vw;
            opacity: 0;
        }
        li.fade-in{
            opacity: 1;
        }
        ul > li:nth-child(1) {transition: all 0.4s ease-in-out 0.2s;}
        ul > li:nth-child(2) {transition: all 0.4s ease-in-out 0.4s;}
        ul > li:nth-child(3) {transition: all 0.4s ease-in-out 0.6s;}
        ul > li:nth-child(4) {transition: all 0.4s ease-in-out 0.8s;}
        ul > li:nth-child(5) {transition: all 0.4s ease-in-out 1s;}
        ul > li:nth-child(6) {transition: all 0.4s ease-in-out 1.2s;}
    }
`