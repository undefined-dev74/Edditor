import { Avatar, Badge } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar, Brand, Form, NavIcons, Modal, Nav } from './Header.styled';

const Header = () => {
  const completedTodos = useSelector(state =>
    state.todos.filter(todo => todo.completed === true)
  );

  return (
    <div>
      <Navbar>
        <Modal />
        <Nav>
          <Brand>
            <div>
              <a href="/">
                Edittor
                <span>
                  <i className="bi bi-pen"></i>
                </span>
              </a>
            </div>
          </Brand>

          <Form>
            <div className=" search">
              <i className="bi bi-search"></i>
              <input
                type="search"
                className="searchbar "
                placeholder="Search anything"
              />
            </div>
          </Form>
          <NavIcons>
            <ul>
              <li>
                <Badge count={completedTodos.length} color="success">
                  <Avatar shape="square" size="large" />
                </Badge>
              </li>
              <li>
                <a href="/">
                  <i className="bi bi-app-indicator"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="bi bi-bell"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="bi bi-gear"></i>
                </a>
              </li>
            </ul>
          </NavIcons>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
