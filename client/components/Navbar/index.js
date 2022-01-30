import Link from "next/link";
import { useState } from "react";
import {
  NavbarContainer,
  NavbarContent,
  NavbarItems,
  Avatar,
  ItemContainer,
  CustomBtn,
  ProfileAndDarkMode,
  DropdownDiv,
  LogoContainer,
  VoidProfile,
  CaretContainer,
  ProfileContainer,
} from "./styles";
import {
  FaArchive,
  FaCaretDown,
  FaHome,
  FaUserCircle,
  FaUsers,
} from "react-icons/fa";

import { FaRegGrinWink, FaRegListAlt, FaSignOutAlt } from "react-icons/fa";

import { useDetectClickOutside } from "react-detect-click-outside";
import DarkModeSwitch from "../DarkModeSwitch";
import { logout } from "../../services/logout";
import { useRouter } from "next/router";
import { useWhoami } from "../../services/User";
import Burger from "../Burger";
import withAuthCheck from "../../services/withAuthCheck";

function Navbar({ user, items, ocultar }) {
  const { data, isLoading } = useWhoami();
  const router = useRouter();

  const [dropdown, setDropdown] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const [opened, setOpened] = useState(null);
  const [caret, setCaret] = useState(false);
  const ref = useDetectClickOutside({
    onTriggered: () => setDropdown(false),
  });

  async function salir() {
    await logout();
    router.push(`/login`);
  }
  const ref2 = useDetectClickOutside({
    onTriggered: () => setOpened(null),
  });
  const ref3 = useDetectClickOutside({
    onTriggered: () => setMobileDropdown(false),
  });

  return (
    <>
      {!ocultar ? (
        <NavbarContainer className="navbar__container">
          <NavbarContent className="navbar__container">
            <Burger className="navbar__burger" items={items} />
            <Link href="/">
              <LogoContainer>
                <h1 className="navbar__title">Mis Finanzas</h1>
              </LogoContainer>
            </Link>
            <NavbarItems ref={ref2}>
              {items?.map((item, index) => {
                return (
                  <DropdownDiv
                    key={index}
                    className="dropdown"
                    opened={opened == index ? true : false}
                  >
                    <Link href={item?.link}>
                      <ItemContainer
                        onClick={() =>
                          setOpened(opened == index ? null : index)
                        }
                        className={item?.link}
                      >
                        {item?.icono}
                        <p>{item?.nombre}</p>
                      </ItemContainer>
                    </Link>
                  </DropdownDiv>
                );
              })}
            </NavbarItems>
            <ProfileAndDarkMode>
              <span className="dark__mode__switch">
                <DarkModeSwitch />
              </span>

              {data && !data?.error ? (
                <ProfileContainer
                  onClick={() => {
                    setDropdown(!dropdown);
                    setCaret(!caret);
                  }}
                  ref={ref}
                >
                  <Avatar dropdown={dropdown} ref={ref}>
                    {data?.user ? (
                      <img
                        src={
                          data?.user?.profile_url
                            ? data?.user?.profile_url
                            : "/anonimo.png"
                        }
                        alt="profile"
                      ></img>
                    ) : (
                      <VoidProfile />
                    )}

                    <div id="myDropdown" className="dropdown-content2">
                      <a href="#">
                        {data?.user?.name} {data?.user?.lastname}
                      </a>
                      <a href="#" onClick={() => salir()}>
                        <FaSignOutAlt /> Cerrar Sesión
                      </a>
                    </div>
                  </Avatar>
                  <p className="username">{user?.user?.name}</p>
                  <CaretContainer caret={caret}>
                    <FaCaretDown />
                  </CaretContainer>
                </ProfileContainer>
              ) : !isLoading ? (
                <Link href={`/login`}>
                  <span>
                    <FaUserCircle className="user__icon" />
                    <CustomBtn
                      className="user__btn"
                      reduceMargin={
                        !user?.user?.id &&
                        (router.asPath == `/adopciones` ||
                          router.asPath == `/perdidos`)
                          ? true
                          : false
                      }
                    >
                      Iniciar sesión
                    </CustomBtn>
                  </span>
                </Link>
              ) : (
                <VoidProfile />
              )}
            </ProfileAndDarkMode>
          </NavbarContent>
          
        </NavbarContainer>
      ) : null}
    </>
  );
}

export default withAuthCheck(Navbar);
