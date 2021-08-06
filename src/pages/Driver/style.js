import styled from "styled-components";

export const DriverNameTitle = styled.h2`
  font-size: 30px;
  margin-top: 50px;
`;

export const DriverDetailItem = styled.h3`
  margin-right: 30px;
  font-size: 15px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DeleteButton = styled.button`
  background-color: white;
  height: 40px;
  width: 100px;
  border: none;
  border-radius: 15px;
  box-shadow: 0px 0px 5px 0px grey;
  &:hover {
    background-color: #c73e1d;
    color: white;
  }
`;

export const AddButton = styled.button`
  background-color: white;
  height: 40px;
  width: 100px;
  border: none;
  border-radius: 15px;
  box-shadow: 0px 0px 5px 0px grey;
  &:hover {
    background-color: #2f9c95;
    color: white;
  }
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 40px;
`;
