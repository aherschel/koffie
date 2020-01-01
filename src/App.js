import React, { useEffect, useReducer } from 'react';
import { graphqlOperation } from '@aws-amplify/api';
import Amplify, { API } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';

import { createTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';
import { onCreateTodo } from './graphql/subscriptions';
  
import awsconfig from './aws-exports';
import './App.css';

Amplify.configure(awsconfig);

async function createNewTodo() {
  const todo = { name: "Use AWS AppSync" , description: "Realtime and Offline" };
  await API.graphql(graphqlOperation(createTodo, { input: todo }));
}

// Action Types
const QUERY = 'QUERY';
const SUBSCRIPTION = 'SUBSCRIPTION';

const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case QUERY:
      return {...state, todos: action.todos};
    case SUBSCRIPTION:
      return {...state, todos:[...state.todos, action.todo]};
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getData() {
      const todoData = await API.graphql(graphqlOperation(listTodos));
      dispatch({ type: QUERY, todos: todoData.data.listTodos.items });
    }
    getData();

    const subscription = API.graphql(graphqlOperation(onCreateTodo)).subscribe({
      next: (eventData) => {
        const todo = eventData.value.data.onCreateTodo;
        dispatch({ type: SUBSCRIPTION, todo });
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div>
    <div className="App">
      <button onClick={createNewTodo}>Add Todo</button>
    </div>
    <div>
      {state.todos.length > 0 ? 
        state.todos.map((todo) => <p key={todo.id}>{todo.name} : {todo.description}</p>) :
        <p>Add some todos!</p> 
      }
    </div>
  </div>
  );
}

export default withAuthenticator(App);
