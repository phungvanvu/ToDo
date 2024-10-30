// App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import store from './src/redux/store';
import { addTodo } from './src/redux/actions';
import TodoList from './src/components/TodoList';

const App = () => {
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    if (todoText.trim()) {
      const newTodo = {
        id: Date.now(),
        text: todoText,
        completed: false,
      };
      store.dispatch(addTodo(newTodo));
      setTodoText('');
    }
  };

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TextInput
          placeholder="Add a new todo"
          value={todoText}
          onChangeText={setTodoText}
          style={styles.input}
        />
        <Button title="Add Todo" onPress={handleAddTodo} />
        <TodoList />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#e0f7fa',
  },
  input: {
    borderWidth: 1,
    borderColor: '#00796b',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    marginTop: 30,
  },
});

export default App;
