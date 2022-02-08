import styled from "@emotion/styled";

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 400px;
  width: 100%;
  height: 600px;
  z-index: 10;
  background: #fff;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const ModalContainer = styled.div`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  flex: 1;
`;
