import styled from "@emotion/styled";

import { FaMoon, FaSun, FaBars } from "react-icons/fa";

export const NavbarContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 100%;
  background: var(--navbar-color);
  /* transition: background-color 0.3s ease 0s; */
  z-index: 1000;

  .user__icon {
    display: none;
  }
  
`;

export const DarkModeSwitchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 0 0;
`;
export const FillUserInvisible = styled.div`
  display: flex;
  min-height: 30px;
  min-width: 30px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  svg {
    height: 40px;
    width: 40px;
    margin: 0 3px 0 0;
    fill: #fff;
    color: #fff;
    font-weight: bold;
  }
  svg > path {
    fill: #fff !important;
    font-weight: bold;
  }
`;

export const DropdownDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  .dropdown-content {
    display: ${({ opened }) => (opened ? "flex" : "none")};
    flex-direction: column;
  }
  .active p {
    font-weight: bold;
  }
`;

export const SubMenuItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 0;
  cursor: pointer;
  p {
    color: #000000 !important;
    text-align: left;
  }
`;
export const NavbarContent = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  height: 4rem;
  padding: 0 1rem;
  width: 100%;
  background: var(--navbar-color);
  /* transition: background-color 0.3s ease 0s; */
  max-width: 1600px;

  .navbar__title {
    font-size: 2rem;
    margin: 0;
    padding: 0;
    cursor: pointer;
    color: var(--titles-color);
    z-index: 10;
  }
  @media(max-width: 960px) {
    .navbar__title {display:none;}
  }
  .institucional-dropdown-content {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    background-color: rgb(255, 255, 255);
    max-width: 100px;
    max-height: 120px;
    overflow: auto;
    box-shadow: rgb(0 0 0 / 20%) 0px 8px 16px 0px;
    z-index: 1;
    border-radius: 0.5rem;
    padding: 1rem 0px;
    margin: 3.5rem 2px 0 0;
  }

`;

export const NavbarContentMobile = styled.div`
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: var(--titles-color);
  @media (max-width: 960px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    place-items: center;
    width: 100%;
  }
`;

export const NavbarItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  p {
    margin: 0 0 0 8px;
    padding: 0;
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    color: #eff3f5;
  }

  .dropdown-content {
    display: ${({ opened }) => (opened ? "flex" : "none")};
    position: absolute;
    background-color: #f9f9f9;
    min-width: 120px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    min-width: 180px;
    padding: 12px 5px;
    z-index: 5;
    margin: 3.2rem 0 0 0;
    svg {
      font-size: 1.4rem;
      margin: 3px;
    }
  }
  .dropdown-content > a {
    color: #000000;
    padding: 12px 16px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    &:hover {
      background: #f7f8f8;
    }
  }
  .dropdown-content > p {
    color: #000000;
  }
  @media (max-width: 960px) {
    display: none;
  }
`;
export const NavbarSettings = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.button`
  display: flex;
  flex-direction: row;
  outline: none;
  border: none;
  background: none;
  margin: 0 0 0 0.8rem;
  cursor: pointer;
  img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    object-fit: cover;
  }
  position: relative;
  display: inline-block;
  z-index: 10;

  .dropdown-content2 {
    display: none;
    flex-direction: column;
    position: absolute;
    background: #ffffff;
    min-width: 150px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 10px 0;
    z-index: 1;
    border-radius: 2px;
    margin: 0.5rem 0 0 0;
    max-width: 150px;
    a > svg {
      font-size: 15px;
      margin: 0 5px 0 0;
    }
    left: -5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1 2 auto;
  }
  /* Links inside the dropdown */
  .dropdown-content2 a {
    color: #000000;
    padding: 12px 16px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 13.5px;
    font-weight: bold;
    &:hover {
      background: #f7f8f8;
    }
  }
  .dropdown-content2 a:first-child {
    justify-content: center;
  }
  .dropdown-content2 {
    display: ${({ dropdown }) => (dropdown ? "flex" : "none")};
  }
  /* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
`;

export const AvatarMobile = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  outline: none;
  border: none;
  background: none;
  margin: 0 0 0 1rem;
  position: relative;
  img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    object-fit: cover;
  }
  position: relative;
  display: inline-block;
  z-index: 10;
  @media (max-width: 960px) {
    margin: 0;
  }
  svg {
    font-size: 30px;
    color: #fff;
  }
  .dropdown-content3 {
    display: block;
    position: absolute;
    bottom: 55px;
    user-select: none;
    background: #fff;
    border: 1px solid #c7d8e2;
    width: 120px;
    min-height: 210px;
    height: fit-content;
    border-radius: 3px;
    padding: 0 0 1rem 0;
    box-shadow: 10px 10px 35px rgb(0 0 0 / 13%),
      -10px -10px 35px rgb(0 0 0 / 13%);
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px 0 0 0;
      height: 35px;
    }
    a > svg {
      margin: 0 5px;
      color: var(--titles-color);
      font-size: 15px;
    }
    @media (max-width: 960px) {
      left: -40px;
    }
    @media (max-width: 600px) {
      left: -45px;
    }
    @media (max-width: 560px) {
      left: -55px;
    }
    @media (max-width: 500px) {
      left: -60px;
    }
    @media (max-width: 450px) {
      left: -70px;
    }
    @media (max-width: 350px) {
      left: -80px;
    }
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 8px;
  cursor: pointer;
  p,
  svg {
    color: var(--titles-color);
  }
  svg {
    color: var(--titles-color);
    font-size: 16px;
  }
`;
export const ItemMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  p {
    font-size: 10px;
    color: #fff;
  }
  svg {
    color: #eff3f5;
    font-size: 30px;
    margin: 0 0.3rem;
  }
  @media (max-width: 320px) {
    svg {
      font-size: 20px;
    }
    p {
      display: none;
    }
  }
`;
export const ItemMobileCenterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 0.6rem;
  margin: 0 0 0.5rem 0;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 0.1rem;
  width: fit-content;

  svg {
    color: var(--titles-color);
    font-size: 30px;
  }
  @media (max-width: 320px) {
    svg {
      font-size: 20px;
    }
    p {
      display: none;
    }
  }
`;

export const SwitchMode = styled.button`
  outline: none;
  background: none;
  border: none;
  border-radius: 5px;
`;

export const MoonIcon = styled(FaMoon)`
  color: white;
  font-size: 1.2rem;
`;

export const SunIcon = styled(FaSun)`
  color: white;
  font-size: 1.2rem;
`;

export const BarsIcon = styled(FaBars)`
  display: none;
  color: var(--titles-color);
  font-size: 32px;
  @media (max-width: 960px) {
    display: flex;
  }
`;

export const CustomBtn = styled.button`
  height: 40px;
  width: 140px;
  background: var(--loginBtn-bgcolor);
  color: var(--loginBtn-color);
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
  margin: ${({ reduceMargin }) =>
    reduceMargin ? "0 0 0 0.3rem" : "0 0 0 0.8rem"};
`;

export const ProfileAndDarkMode = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  .dark__mode__switch {
    width: 60px;
  }
`;

export const VoidProfile = styled.div`
  min-height: 50px;
  min-width: 50px;
  height: 50px;
  width: 50px;
  margin: 0 0 0 1rem;
`;

export const NewPetButton = styled.button`
  outline: none;
  height: 40px;
  width: 140px;
  font-size: 14px;
  background: ${({ disabledBtn }) => (disabledBtn ? "#2eb1ff" : "#2eb1ff")};
  border-radius: 5px;
  border: none;
  color: #fff;

  font-weight: bold;
  margin: ${({ reduceMargin }) =>
    reduceMargin ? "0 0.3rem 0 0" : "0 0.8rem 0 0"};

  &:hover {
    cursor: pointer;
  }
`;

export const CaretContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: var(--titles-color);
  z-index: 2;
  svg {
    margin: 5px 0 0 0;
    transform: ${({ caret }) => (caret ? "rotate(180deg)" : "none")};
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .username {
    color: var(--titles-color);
    font-size: 16px;
    font-weight: bold;
    margin: 0 5px 0 0;
    z-index: 2;
  }
`;
