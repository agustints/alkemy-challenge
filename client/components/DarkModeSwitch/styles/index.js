import styled from "@emotion/styled";
import { FaMoon, FaSun } from "react-icons/fa";
export const MoonIcon = styled(FaMoon)`
  color: black;
  font-size: 1.2rem;
`;

export const SunIcon = styled(FaSun)`
  color: black;
  font-size: 1.2rem;
`;

export const DarkModeSwitchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  .checkbox {
    opacity: 0;
    position: absolute;
    cursor: pointer;
  }

  .label {
    background: #88c8f7;
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: relative;
    height: 20px;
    width: 40px;
    transform: scale(1.5);
  }

  .label .ball {
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    height: 16px;
    width: 16px;
    transform: translateX(0px);
    transition: transform 0.2s linear;
  }

  .checkbox:checked + .label .ball {
    transform: translateX(20px);
  }
  .checkbox:checked + .label {
    background: #111;
  }
  .fa-moon {
    color: #f1c40f;
    font-size: 12px;
  }

  .fa-sun {
    color: #ffd900;
    font-size: 12px;
  }
`;
