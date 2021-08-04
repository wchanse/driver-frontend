import styled from "styled-components";

export const SearchBar = styled.input`
  width: 50%;
  height: 40px;
  &:focus {
    outline: none;
  }
  border-radius: 10px;
  padding: 3px;
  padding-left: 10px;
  border: 1px solid grey;
`;

export const SearchButton = styled.button`
  height: 40px;
  width: 100px;
  border: none;
  margin-left: 20px;
  border-radius: 15px;
  &:hover {
    background-color: #254e70;
    color: white;
  }
`;

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  padding: 30px;
`;

export const DriverName = styled.h2``;
