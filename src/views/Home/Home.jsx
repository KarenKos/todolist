import React from 'react';
import { Container } from '../../utils/styledComponents';
import { Header } from './Home_styles';
import ToDoList from '../../components/Todolist/Todolist';


export default () => (
  <Container>
    <Header>Simple To Do List</Header>
    <br />
    <ToDoList />
  </Container>
);
