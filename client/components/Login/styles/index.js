import styled from "@emotion/styled";

export const LoginContainer = styled.section`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;
export const LoginFormBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px,
    rgb(0 0 0 / 6%) 0px 2px 4px -1px;
  width: 400px;
  min-width: 300px;
  max-width: 100%;
  min-height: 300px;
  height: 550px;
  background: #ffffff;
  border-width: 0px;
  border-style: solid;
  border-color: rgb(226, 232, 240);
  border-radius: 10px;
  padding: 2rem;
  h1 {
    margin: 0;
    text-align: center;
    font-size: 1.5rem;
  }
  p {
    margin: 0;
    color: gray;
    font-size: 12px;
    text-align: center;
    margin: 0 0 0.4rem 0;
  }
  @media (max-width: 768px) {
    height: 550px;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 45%;
  .logo {
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
  @-webkit-keyframes heartbeat {
    from {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: center center;
      transform-origin: center center;
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    10% {
      -webkit-transform: scale(0.91);
      transform: scale(0.91);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    17% {
      -webkit-transform: scale(0.98);
      transform: scale(0.98);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    33% {
      -webkit-transform: scale(0.87);
      transform: scale(0.87);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    45% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
  @keyframes heartbeat {
    from {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: center center;
      transform-origin: center center;
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    10% {
      -webkit-transform: scale(0.91);
      transform: scale(0.91);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    17% {
      -webkit-transform: scale(0.98);
      transform: scale(0.98);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    33% {
      -webkit-transform: scale(0.87);
      transform: scale(0.87);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    45% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
export const RegisterFormBox = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px,
    rgb(0 0 0 / 6%) 0px 2px 4px -1px;
  width: 400px;
  min-width: 300px;
  max-width: 100%;
  min-height: 670px;
  height: 670px;
  background: #ffffff;
  border-width: 0px;
  border-style: solid;
  border-color: rgb(226, 232, 240);
  border-radius: 10px;
  padding: 2rem;
  h1 {
    margin: 0;
    text-align: center;
    font-size: 1.5rem;
  }
  p {
    margin: 0;
    color: gray;
    font-size: 12px;
    text-align: center;
    margin: 0 0 0.4rem 0;
  }
  .terminos__condiciones {
    margin: 0.8rem 0;
    b:hover {
      cursor: pointer;
    }
  }
`;
export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 55%;
  background: #ebf5f0;
  @media (max-width: 768px) {
    min-height: 100vh;
    width: 100%;
    padding: 0 0.5rem;
  }
`;

export const FormDivider = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0 5px;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ReCaptchaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const UsernameRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const LoginWithGoogle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 200px;
  height: 45px;
  border-radius: 5px;
  padding: 0.5rem;
  background: red;
  p {
    color: white !important;
    font-size: 1rem !important;
    margin: 0 !important;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const LoginWithFacebook = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 200px;
  height: 45px;
  border-radius: 5px;
  padding: 0.5rem;
  background: #1877f2;
  p {
    color: white !important;
    font-size: 1rem !important;
    margin: 0 !important;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const LoginWithFacebookContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0 0 0;
`;
export const LoginWithGoogleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0 0 0;
`;
export const UsernameRowCustom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 258px;
`;
export const FormContainerRow = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
`;

export const LoginBtn = styled.button`
  height: 45px;
  background: #000000;
  color: #ffffff;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 1rem;

  cursor: pointer;
  max-width: 200px;
  width: 100%;
  &:hover {
    transform: scale(1.02);
  }
  margin: 0.5rem auto;
`;

export const UsernameInput = styled.input`
  height: 2rem;
  width: 100%;
  background: #edf2f7;
  border: none;
  font-size: 1rem;
  height: 3rem;
  padding: 0 0.5rem;
  border-radius: 0.25rem;
  border: 2px solid transparent;
  transition: all 0.2s ease 0s;
  margin: 0 0 0.5rem 0;
`;

export const PasswordInput = styled.input`
  height: 2rem;
  width: 100%;
  background: #edf2f7;
  border: none;
  font-size: 1rem;
  height: 3rem;
  padding: 0 0.5rem;
  border-radius: 0.25rem;
  border: 2px solid transparent;
  transition: all 0.2s ease 0s;
  margin: 0 0 0.5rem 0;
`;

export const LabelEmail = styled.label`
  margin: 2rem 0 0 0;
  font-weight: 500;
  font-size: 14px;
  margin: 0.5rem 0;
`;
export const LabelPassword = styled.label`
  margin: 2rem 0 0 0;
  font-weight: 500;
  font-size: 14px;
  margin: 0.5rem 0;
`;
export const LabelSpan = styled.span`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const LabelForgot = styled.label`
  margin: 2rem 0 0 0;
  font-weight: 500;
  font-size: 10px;
  margin: 0.5rem 0;
  color: gray;
  cursor: pointer;
`;
export const LabelHasAccount = styled.label`
  font-weight: 600;
  font-size: 14px;
  margin: 0.6rem 0 0 0;
  color: gray;
  width: 100%;
  text-align: center;
  cursor: pointer;
`;
export const LabelForgotPassword = styled.label`
  font-weight: 600;
  font-size: 14px;
  margin: 12px 0 0 0;
  color: gray;
  width: 100%;
  text-align: center;
  cursor: pointer;
`;

export const InstagramIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: purple;
  font-size: 45px;
  cursor: pointer;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  flex: 1;
  h1 {
    margin: 5px 0;
  }
  svg {
    width: 80px;
    height: 80px;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
  height: 100%;
  margin: 1.5rem 0;
`;

export const WhatsAppBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 50%;
  flex: 1;
  padding: 1rem;
  border-radius: 5px;
  height: 100%;
  margin: 0 0.5rem;
  transition: transform 0.2s;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  background: #fff;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const GmailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 50%;
  flex: 1;
  padding: 1rem;
  border-radius: 5px;
  height: 100%;
  margin: 0 0.5rem;
  transition: transform 0.2s;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  background: #fff;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
