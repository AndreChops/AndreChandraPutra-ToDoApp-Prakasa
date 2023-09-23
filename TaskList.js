import React from "react";
import { View, FlatList, Text } from "react-native";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onDelete={() => onDelete(item.id)}
            onEdit={() => onEdit(item)}
          />
        )}
      />
    </View>
  );
};

export default TaskList;
