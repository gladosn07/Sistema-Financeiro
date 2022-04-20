import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  margin-top: 10px;
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
  padding: 10px 0;
  text-align: left;
  width: ${(props) => (props.width ? props.width : "auto")}px;
`;
