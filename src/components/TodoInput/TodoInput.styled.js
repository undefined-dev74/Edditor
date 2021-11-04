import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-column-gap: 10px;
`;

export const FormControl = styled.div`
  grid-column: 2/3;
  width: 30rem;
  margin: 0 auto;

  input.form-control {
    height: 10px;
    width: 80%;
    font-weight: 400;
    font-family: 'Montserrat', Sens-serif;
    line-height: 1.5;
    text-transform: lowercase;
    color: #222831;
    background-color: #cccccc;
    box-shadow: -1px 1px 47px -2px rgba(235, 227, 227, 0.92);
    background-clip: padding-box;
    border: 1px solid #feb72b;
    border-radius: 12px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    z-index: 5;
    margin-top: 0.3rem;
    padding: 1rem 0 1rem 3rem;
    resize: none;
    overflow: hidden;

    &::placeholder {
      transform: translate(0, 0);
    }

    &:active,
    &:visited,
    &:focus {
      outline: none;
      background-color: #cccccc;
      border: 2px solid #1266f1;
      transition: border-color 0.5s ease-in;
    }
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 8px 40px;
  font-size: 14px;
  color: #393e46;
  font-family: 'Poppins', Sens-serif;
  border: none;
  background-color: #f39422;
  border-radius: 22px;
  cursor: pointer;

  span > i {
    text-align: center;
    margin-left: 10px;
    color: blue;
  }
`;
