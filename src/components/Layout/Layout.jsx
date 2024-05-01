/* eslint-disable no-useless-catch */

import { Container } from "../../globalStyles";
import { Outlet } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { Suspense, useEffect, useState } from "react";
import ukraine from "../../assets/images/ukraine.jpg";
import {
  ButtonLogin,
  ButtonRegister,
  Header,
  HeaderContainer,
  ImgLogo,
  List,
  Nav,
  Navigate,
  TitleLogo,
  WrapperAut,
  WrapperLogo,
} from "./Layout.styled";
import { Loader } from "../../components/Loader/Loader";
import { useModal } from "../../helpers/useModal";
import { ModalComponent } from "../../components/Modal/Modal";
import { Register } from "../../components/AuthForm/RegisterForm";
import { Login } from "../../components/AuthForm/LoginForm";
import { auth } from "../../config/firebase-config";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { deleteToken } from "../../redux/sliceAuth";

const Layout = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [user, setUser] = useState(null);
  const authUser = useSelector((state) => state.authUser.token);
  const dispatch = useDispatch();

  const clickLogOut = async () => {
    try {
      await signOut(auth);
      setUser(null);

      dispatch(deleteToken());
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((maybeUser) => {
      const user = auth.currentUser;

      if (authUser || user) {
        return setUser(maybeUser);
      }
      return;
    });
  }, [authUser]);

  return (
    <>
      <Header>
        <Container>
          <HeaderContainer>
            <WrapperLogo>
              <ImgLogo
                src={ukraine}
                alt="Flag Ukraine"
                width="28"
                height="28"
              />
              <TitleLogo>LearnLingo</TitleLogo>
            </WrapperLogo>
            <Nav>
              <List>
                <li>
                  <Navigate activeclassname="active" to="/">
                    Home
                  </Navigate>
                </li>
                <li>
                  <Navigate to="teachers">Teachers</Navigate>
                </li>
                {authUser && (
                  <li>
                    <Navigate to="favorite">Favorites</Navigate>
                  </li>
                )}
              </List>
            </Nav>
            {!authUser && (
              <WrapperAut>
                <li>
                  <ButtonLogin type="button" onClick={() => openModal("login")}>
                    <span>
                      <FiLogIn stroke="var(--button-background-color)" />
                    </span>
                    Log in
                  </ButtonLogin>
                </li>
                <li>
                  <ButtonRegister
                    type="button"
                    onClick={() => openModal("register")}
                  >
                    Registration
                  </ButtonRegister>
                </li>
              </WrapperAut>
            )}
            {authUser && user && (
              <ButtonRegister type="button" onClick={clickLogOut}>
                Log out
              </ButtonRegister>
            )}
          </HeaderContainer>
        </Container>
        {isOpen.open && isOpen.name === "login" && (
          <ModalComponent onClose={closeModal}>
            <Login onClose={closeModal} />
          </ModalComponent>
        )}
        {isOpen.open && isOpen.name === "register" && (
          <ModalComponent onClose={closeModal}>
            <Register onClose={closeModal} />
          </ModalComponent>
        )}
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
