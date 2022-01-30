import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";

export const MenuContainer = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  text-align: left;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  z-index: 2;
  background: var(--navbar-color);
  flex: 1;
  overflow: auto;

  .item > svg {
    color: var(--titles-color);
    font-size: 1.2rem;
    margin: 0 1rem 0 0;
  }

  p {
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: var(--titles-color);
    text-decoration: none;
    transition: color 0.3s linear;
  }
  div {
    width: fit-content;
  }
  .label {
    border: 1px solid white;
    height: 22px;
    width: 42px;
  }

  .submenu > svg {
    margin: 0 0 0 1.5rem;
  }
  .submenu > p {
    margin: 0 0 0 0.5rem;
    padding: 1rem 0;
  }
  .submenu > p,
  .submenu > svg {
    font-size: 14px;
  }
`;

export const SubMenu = styled.div`
  display: ${({ opened }) => (opened ? "flex" : "none")};
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  .item > svg {
    color: white;
    font-size: 1.2rem;
    margin: 0 1rem 0 0;
  }

  .submenu > svg {
    margin: 0 0 0 1.5rem;
  }
  .submenu > p {
    margin: 0 0 0 0.5rem;
    padding: 1rem 0;
  }
  .submenu > p,
  .submenu > svg {
    font-size: 14px;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  & > svg {
    color: white;
    font-size: 1.2rem;
    margin: 0 1rem 0 0;
  }
`;
