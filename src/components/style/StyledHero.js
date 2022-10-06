import styled, { keyframes } from "styled-components"

const heroAnim = keyframes `
    0% {
        transform: translateX(100rem) rotate(360deg);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`

export const StyledHero = styled.section `
    height: 100vh;
    background-image: url('img/full-bg-07.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 1200px) {
        background-position: 100%;
        align-items:flex-end;
    }
    @media (max-width: 610px) {
        background-position: 80%;
    }
    
    > div {
        background-color: var(--secondary-color-alt);
        padding: calc(1rem + 2vw);
        height: calc(5rem + 20vmax);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        animation: ${heroAnim} 2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        
        > h1 {
            font-size: calc(2rem + 3vw);
            color: #fff;
        }
        > p {
            font-family: 'Indie Flower', cursive;
            font-size: calc(1.5rem + 1vw);
            color: #fff;
        }
        > a {
            color: #fff;
            :link,:visited {
                padding: 1rem 0;
                transition: all 0.5 ease-in-out;
                width: 9rem;
                text-transform: uppercase;
                font-size: 1.5rem;
                font-weight: 600;
                letter-spacing: 0.2rem;
                position: relative; 
                z-index: 1;
            }
            :link::after, :visited::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                background-color: var(--primary-color);
                transform: scaleX(0);
                transform-origin: right;
                transition: transform 0.45s cubic-bezier(0.645, 0.045, 0.355, 1);
                z-index: -1;
            }
            :hover::after, :active::after {
                transform: scaleX(1);
                transform-origin: left;
            }
        }
    }
`