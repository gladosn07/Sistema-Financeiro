import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`;

export const AddItem = styled.button`
  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
    rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
    rgba(44, 187, 99, 0.15) 0 16px 32px;
  color: green;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
      rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
      rgba(44, 187, 99, 0.25) 0 16px 32px;
  }
`;

export const Date = styled.input`
  background-color: #0080ff;
  color: #fff;
  border: none;
  padding: 0 4px;
  border-radius: 5px;
  outline: none;

  &::-webkit-calendar-picker-indicator {
    background-color: #fff;
    padding: 4px;
    border-radius: 5px;
  }
`;

export const Select = styled.select`
  background-color: #0080ff;
  color: #fff;
  border: none;
  padding: 0 4px;
  border-radius: 5px;
  outline: none;
`;

export const Input = styled.input`
  text-align: center;
  border-color: #0080ff;
  border-radius: 5px;
  -webkit-appearance: none;
`;
