import React, { useState } from "react";
import { MenuContainer, SubMenu, MenuItem } from "./styles";
import Link from "next/link";
import DarkModeSwitch from "../../DarkModeSwitch";

export default function index({ open, items }) {
  const [opened, setOpened] = useState(null);
  return (
    <MenuContainer open={open}>
      {items?.map((item, index) => {
        return (
          <div key={index}>
            {!item?.submenu ? (
              <Link href={item?.link}>
                <MenuItem className="item" key={index}>
                  {item?.icono}
                  <p>{item?.nombre}</p>
                </MenuItem>
              </Link>
            ) : (
              <MenuItem
                className="item"
                key={index}
                onClick={() => setOpened(opened == index ? null : index)}
              >
                {item?.icono}
                <p>{item?.nombre}</p>
              </MenuItem>
            )}

            {item?.submenu?.map((i, index2) => {
              return (
                <Link href={i?.link} key={index2}>
                  <SubMenu
                    className="item submenu"
                    opened={opened == index ? true : false}
                  >
                    {i?.icono}
                    <p>{i?.nombre}</p>
                  </SubMenu>
                </Link>
              );
            })}
          </div>
        );
      })}
      <DarkModeSwitch className="dark__mode__switch" />
    </MenuContainer>
  );
}
