import styled from 'styled-components';

export const Navbar = styled.nav`
  width: 100%;
  height: 70px;
  position: relative;
  background-color: #feb72b;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;
export const Modal = styled.div`
  height: 1.2rem;
  background-color: #f39422;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

export const Nav = styled.div`
  margin-top: 10px;
  display: grid;
  width: inherit;
  grid-template-columns: 25% 50% 25%;
  grid-column-gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const Brand = styled.div`
  div > a {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    color: #393e46;
    text-decoration: none;

    i {
      margin-left: 3px;
    }
  }
`;

export const Form = styled.form`
  padding: 0 45px;

  div {
    position: relative;

    i {
      position: absolute;
      top: 10px;
      left: 10px;
      transform: translate(5px, 0);
    }
  }

  input {
    width: 100%;

    text-align: center;
  }

  input.searchbar {
    font-size: 15px;
    line-height: 5px;
    border-radius: 3rem;
    padding: 8px 18px;
    background-color: #f39422;
    border: none;
    color: #393e46;

    &:focus,
    &:active {
      outline: none;
      background-color: #f39422;
      border: 1px #feb72b solid;
    }

    &::placeholder {
      text-align: center;
      color: #393e46;
      font-size: 12px;
      font-family: 'Montserrat', Sens-serif;
      font-weight: 400;
      padding: 0;
    }
  }
`;
export const NavIcons = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;

    li > a {
      margin-left: 15px;
      text-decoration: none;
      cursor: pointer;
      color: white;
    }
  }
`;
