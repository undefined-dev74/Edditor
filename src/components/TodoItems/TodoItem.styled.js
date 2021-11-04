import styled from 'styled-components';

export const TodoItems = styled.div`
  margin-bottom: 10px;
`;

export const TodoList = styled.div`
  display: grid;
  grid-template-rows: 1fr 30px;

  height: auto;
  width: 25rem;
  border-radius: 12px;
  background-color: #eeeeee;
  /* box-shadow: -1px 1px 47px -2px rgba(235, 227, 227, 0.92); */
`;

export const TodoValue = styled.div`
  grid-row: 1 /2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  height: 40px;
  margin-top: 8px;
  margin-left: 18px;
`;

export const Title = styled.h5`
  font-family: 'Monserrat', sans-serif;
  font-size: 14px;
  line-height: 2rem;
  color: #2c2e43;
`;

export const TimelineDetails = styled.div`
  display: flex;
  align-items: center;
  color: #2b2b2b;

  h6 {
    font-family: 'Monserrat', sans-serif;
    text-transform: capitalize;
  }

  p {
    margin-left: 4px;
    font-family: 'Raleway', sans-serif;
    font-size: 10px;
    font-weight: 600;
  }
`;

export const TodoIcons = styled.div`
  grid-row: 2/ 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 15px;

  :not(:last-child) {
    margin-left: 5px;
  }
`;
