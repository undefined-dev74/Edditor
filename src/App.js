import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Timeline from './components/Timeline';
import { Row, Col } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList/';

function App() {
  return (
    <div className="app">
      <Row>
        <Col span={12}>
          <Header />
          <Content
            style={{
              overflow: 'initial',
              backgroundColor: '#ffffff',
            }}
          >
            <Timeline />
            <TodoInput />
            <TodoList />
          </Content>
        </Col>
      </Row>
    </div>
  );
}

export default App;
