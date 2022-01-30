import React, { useState } from "react";
import { BurgerContainer } from "./styles";
import Menu from "./Menu";
import { Global, css } from "@emotion/react";
export default function Burger({ items }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <Global
          styles={css`
            body {
              overflow: hidden;
            }
          `}
        />
      )}
      <BurgerContainer open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerContainer>
      <Menu open={open} items={items}></Menu>
    </>
  );
}
