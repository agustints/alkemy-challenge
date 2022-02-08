import styled from "@emotion/styled";

export const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background: var(--background-color);
  .form__container {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 960px) {
    padding: 0 0 4rem 0;
  }
`;
export const ContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 1366px) {
    max-width: 960px;
  }
`;

export const CustomBtn = styled.button`
  height: 2.5rem;
  background: #58c1f5;
  color: #ffffff;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0 0 0;
  cursor: pointer;
  padding: 0 1rem;
`;
