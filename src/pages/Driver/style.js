import styled from 'styled-components';

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
  border: 1px solid red;
`;

export const DeleteButton = styled.button`
  height: 40px;
  width: 100px;
  border: none;
  border-radius: 15px;
  box-shadow: 2px 3px 3px 2px #333;
  &:hover {
    background-color: red;
    color: white;
  }
`;

export const AddButton = styled.button`
  height: 40px;
  width: 100px;
  border: none;
  border-radius: 15px;
  box-shadow: 2px 3px 3px 2px #333;
  &:hover {
    background-color: green;
    color: white;
  }
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 40px;
`;
