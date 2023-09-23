import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const TaskItem = ({ task, onDelete, onEdit }) => {
  return (
    <View>
      <Text>{task.name}</Text>
      {task.image && (
        <Image
          source={{ uri: task.image }}
          style={{ width: 100, height: 100 }}
        />
      )}
      <TouchableOpacity onPress={onEdit}>
        <Text>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;
