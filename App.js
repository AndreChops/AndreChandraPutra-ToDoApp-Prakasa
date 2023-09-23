import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTaskHandler = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const editTaskHandler = (editedTask) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      const taskIndex = updatedTasks.findIndex(
        (task) => task.id === editedTask.id
      );
      if (taskIndex !== -1) {
        updatedTasks[taskIndex] = editedTask;
      }
      return updatedTasks;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo App</Text>
      <View style={styles.taskSection}>
        <AddTask onAdd={addTaskHandler} />
        <ScrollView contentContainerStyle={styles.taskList}>
          {tasks.length > 0 ? (
            <TaskList
              tasks={tasks}
              onDelete={deleteTaskHandler}
              onEdit={editTaskHandler}
            />
          ) : (
            <Text style={styles.noTasks}>
              No tasks yet. Start adding tasks!
            </Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    paddingTop: 40,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  taskSection: {
    flex: 1,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  taskList: {
    flexGrow: 1,
  },
  noTasks: {
    fontSize: 18,
    textAlign: "center",
    color: "#666",
  },
});
