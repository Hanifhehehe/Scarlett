import styled from "styled-components";

export const StyledAbout=styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  padding: 2rem;
  background-color: var(--secondary-color);
  > div {
    flex-basis: 40rem;
    padding: 2rem;
    flex-grow: 1;
  }
  img {
    width: 100%;
    height: 100%;
    max-height: 878px;
    max-width: 703px;
    object-fit: cover;
  }
  > div > h2 {
    font-size: 4rem;
    padding: 1rem 0;
    color: white;
    text-transform: uppercase;
    position: relative;
    :after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 0.3rem;
        width: 10%;
        background-color: var(--primary-color);
    }
  }
  > div > h2, p {
    margin-bottom: 4rem;
    letter-spacing: 0.2rem;
  }
  > div > a {
    cursor: pointer;
    padding: 1rem 0;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.2rem;
    text-transform: uppercase;

    position: relative;
    z-index: 1;
    :after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--primary-color);
        transform: scaleY(0);
        transform-origin: bottom;
        transition: transform 0.45s cubic-bezier(0.645, 0.045, 0.355, 1);

        z-index: -1;
    }
    :hover,
    :active {
        :after {
            transform: scaleY(1);
            transform-origin: top;
        }
    }
  }
`