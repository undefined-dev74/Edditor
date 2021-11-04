import styled from 'styled-components';

export const ListContainer = styled.div`
  text-align: center;
  overflow: hidden;
  grid-column: 2 /3;
  min-height: 100px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: scroll;
  overflow-x: scroll;
  margin-top: 20px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    /* background-color: #feb72b; */
    width: 4px;
    cursor: pointer;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #f39422;
    border-radius: 15px;
    width: 4px;
  }
`;
