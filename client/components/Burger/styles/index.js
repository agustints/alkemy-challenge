import styled from "@emotion/styled";

export const BurgerContainer = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: var(--titles-color);
    border-radius: 10px;
    position: relative;
    transform-origin: 1px;

    :first-of-type {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      transition: all 0.05 linear;
    }

    :nth-of-type(2) {
      visibility: ${({ open }) => (open ? "hidden" : "unset")};
    }

    :nth-of-type(3) {
      transition: all 0.05s linear;
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  @media (max-width: 960px) {
    display: flex;
  }
`;
