import styled from "styled-components";

export const DriverRow = styled.tr`
  background-color: #8ee3ef;
  border-radius: 15px;
  width: 100%;
`;

export const TableHeader = styled.div`
  display: flex;
  background-color: red;
  width: 100%;
`;

export const EditInput = styled.input`
  width: 100%;
`;

export const ActionButton = styled.button`
  height: 30px;
  width: 80px;
  border: none;
  border-radius: 15px;
  border: 1px solid black;
  margin-left: 5px;
  margin-right: 5px;
  &:hover {
    background-color: #254e70;
    color: white;
  }
`;
