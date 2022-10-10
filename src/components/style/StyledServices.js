import styled from "styled-components";

export const StyledServices = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  padding: 6rem 2rem 2rem;
  background-color: var(--primary-color);
  > div {
    padding: 4rem;
    margin: 0 2rem 4rem;
    flex-basis: 40rem;
    flex-grow: 1;
    background-color: var(--secondary-color);
    border-bottom: 0.2rem solid var(--secondary-color);
    border-right: 0.2rem solid var(--secondary-color);
    border-left: 0.2rem solid var(--secondary-color);

    position: relative;
    z-index: 1;
    color: #fff;
    :after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: var(--primary-color);
        transform: scaleX(0);
        transition: transform 0.45s cubic-bezier(1, 0, 0, 1);

        z-index: -1;
    }
    :hover, :active {
        :after {
            transform: scaleX(1);
        }
    }
  }
  > div > h3, img {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  > div > img {
    height: 30px;
    width: 30px;
    filter: invert(1);
    }
  > div > p {
    font-family: "Indie Flower", cursive;
    font-size: 2rem;
  }
`