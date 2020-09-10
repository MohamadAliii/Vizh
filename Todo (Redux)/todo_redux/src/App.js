import React from 'react';
import AddTodo from './Component/AddTodo'
import TodoList from './Component/TodoList'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Reducer from './Reducer'


const store = createStore(Reducer)

function App() {
  return (
    <div>
      <Provider store={store}>
        <AddTodo />
        <TodoList />
      </Provider>

    </div>
  );
}

export default App;
