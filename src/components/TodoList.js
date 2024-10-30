// src/components/TodoList.js
import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../redux/actions';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.todoContainer}>
          <TouchableOpacity onPress={() => dispatch(toggleTodo(item.id))}>
            <Text style={[styles.todoText, item.completed && styles.completedTodo]}>
              {item.text}
            </Text>
          </TouchableOpacity>
          <Button
            title="Delete"
            color="#ff5c5c"
            onPress={() => dispatch(removeTodo(item.id))}
          />
        </View>
      )}
      contentContainerStyle={styles.listContainer} 
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20, 
  },
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10, 
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  todoText: {
    fontSize: 18,
    color: '#333',
  },
  completedTodo: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});

export default TodoList;
