import React from 'react';
import { Container } from '../../utils/styledComponents';
import { Header } from './Home_styles';
import Input2 from '../../components/Input2/Input2';
import ToDoList from '../../components/Todolist/Todolist';


export default () => (
  <Container>
    <Header>Simple To Do List</Header>
    <br />
    <Input2 />
    <ToDoList />
  </Container>
);
