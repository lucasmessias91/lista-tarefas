import styled from "styled-components";

import { FcEmptyTrash, FcOk } from "react-icons/fc";

export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TodoList = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 10px;
  display: grid;
  width: 80vw;
  grid-template-columns: 3fr 1fr;
  grid-gap: 30px;

  ul {
    padding: 0;
    margin-top: 50px;
    grid-column: 1/3;
    margin-right: 20px;
  }
`;

export const Input = styled.input`
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 5px;
  height: 40px;
  width: 100%;
`;

export const Button = styled.button`
  background: #8052ec;
  border-radius: 5px;
  border: none;
  font-size: 17px;
  font-weight: 900;
  line-height: 2px;
  color: white;
  height: 40px;
  width: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;
export const ListItem = styled.div`
  background: ${(props) => (props.isFinished ? "#e8ff8b" : "#e4e4e4")};
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 10px;
  width: 100%;

  li {
    list-style: none;
  }
`;

export const Trash = styled(FcEmptyTrash)`
  cursor: pointer;
  font-size: 30px;
`;
export const Check = styled(FcOk)`
  cursor: pointer;
  font-size: 30px;
`;
