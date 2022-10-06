import styled from "styled-components"

export const StyledHero = styled.section `
    height: 100vh;
    background-image: url('img/full-bg-07.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    > div {
        background-color: var(--secondary-color-alt);
        padding: calc(1rem + 2vw);
        height: calc(5rem + 20vmax);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
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
                
            }
        }
    }
`