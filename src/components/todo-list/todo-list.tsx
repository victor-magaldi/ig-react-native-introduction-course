import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, FlatList } from 'react-native';

import { Checkbox } from 'expo-checkbox';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  task: Task;
  deleteTask: (id: number) => void;
  toggleCompleted: (id: number) => void;
}

function TodoItem({ task, deleteTask, toggleCompleted }: TodoItemProps) {
  return (
    <View style={styles.itemContainer}>
      <Checkbox
        // style={styles.checkbox}
        value={task.completed}
        onValueChange={() => toggleCompleted(task.id)}
        color={task.completed ? '#4630EB' : undefined}
      ></Checkbox>/
      <Text style={[
        styles.text,
        { textDecorationLine: task.completed ? 'line-through' : 'none' }
      ]}>
        {task.text}
      </Text>
      <Button title="X" color="red" onPress={() => deleteTask(task.id)} />
    </View>
  );
}

export function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Task 01', completed: true },
    { id: 2, text: 'Meeting at School', completed: false },
  ]);
  const [text, setText] = useState<string>('');

  function addTask() {
    if (text.trim().length === 0) return;

    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setText('');
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleCompleted(id: number) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem
            task={item}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Nova tarefa..."
        />
        <Button title="Add" onPress={addTask} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, backgroundColor: '#fff' },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  text: { flex: 1, marginLeft: 10 },
  inputContainer: { marginTop: 20, flexDirection: 'row', gap: 10 },
  input: { borderBottomWidth: 1, flex: 1, padding: 5 }
});