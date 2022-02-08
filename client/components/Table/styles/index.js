import styled from "@emotion/styled";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  h1 {
    width: 100%;
    text-align: center;
    color: var(--titles-color);
    margin: 0;
  }
  .combobox {
    width: fit-content;
    background: #edf2f7;
    border: none;
    font-size: 1rem;
    height: 2.2rem;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    border: 2px solid transparent;
    transition: all 0.2s ease 0s;
    margin: 0 1rem 1rem 0;
  }
  .divider {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
    max-width: 550px;
    width: 100%;
    align-self: center;
  }
`;
export const Table = styled.table`
  border: 2px solid black;
  border-radius: 5px;
  min-width: 350px;
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  tr {
    background: #fff;
  }
  td,
  th {
    padding: 8px;
  }
  th {
    background: var(--secondary);
    padding: 12px 0;
    color: #000000;
    border: 1px solid var(--secondary);
  }
  td {
    background: #2c2f33;
    color: #ffffff;
    border: 1px solid #000000;
  }
  @media (max-width: 768px) {
    border-radius: 0;
  }
`;
export const TableScroll = styled.div`
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  border-radius: 4px;
`;
export const TableDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--titles-color);
  p {
    margin: 0.2rem 0 1rem 0;
  }
`;

export const CustomBackgroundPencil = styled.div`
  background: #375980;
  width: 2rem;
  height: 2rem;
  margin: 0 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CustomBackgroundTrash = styled.div`
  background: #e94c3d;
  width: 2rem;
  height: 2rem;
  margin: 0 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const CustomBackgroundCheck = styled.div`
  background: #0f9d58;
  width: 2rem;
  height: 2rem;
  margin: 0 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CustomBackgroundPlus = styled.div`
  background: #375980;
  width: 2rem;
  height: 2rem;
  margin: 0 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CustomOptions = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  height: 2rem;
  width: fit-content;
  background: #edf2f7;
  border: none;
  font-size: 1rem;
  height: 2.2rem;
  padding: 0 0.5rem;
  border-radius: 0.25rem;
  border: 2px solid transparent;
  transition: all 0.2s ease 0s;
  margin: 0 0 1rem 0;
  /* Chrome, Safari, Edge, Opera */
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  [type="number"] {
    -moz-appearance: textfield;
  }
`;
export const CustomBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const Avatar = styled.img`
  display: flex;
  flex-direction: column;
  object-fit: cover;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

export const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  h1 {
    margin: 1rem 0;
  }
`;

export const NewOperationBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  outline: none;
  border: none;
  color: var(--titles-color);
  font-size: 1.5rem;
  cursor: pointer;
  margin: 10px 0 0 0;
`;

export const TableBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TableDescription = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr 180px;
  justify-content: center;
  align-items: center;
  width: 100%;
  p {
    text-align: center;
  }
  select {
    max-width: 180px;
  }
  @media(max-width: 760px) {
    grid-template-columns: 180px;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
