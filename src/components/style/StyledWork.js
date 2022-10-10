import styled from "styled-components";

export const StyledWork = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 2rem;
  background-color: var(--tertiary-color);
  > div {
    padding: 2rem;
    flex-basis: 40rem;
    flex-grow: 1;
    
    clip-path: polygon(
        20% 0%,
        80% 0%,
        100% 20%,
        100% 80%,
        80% 100%,
        20% 100%,
        0% 80%,
        0% 20%
    );
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;

    transition: filter 0.45s ease;
    :hover, :active {
        filter: sepia(80%);
    }
  }

`