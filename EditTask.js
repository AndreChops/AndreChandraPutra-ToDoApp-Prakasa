import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const EditTask = ({ task, onSave, onCancel }) => {
  const [editedName, setEditedName] = useState(task.name);
  const [editedImage, setEditedImage] = useState(task.image);

  const handleSave = () => {
    // Create an updated task object
    const updatedTask = {
      ...task,
      name: editedName,
      image: editedImage,
    };

    // Call the onSave callback with the updated task
    onSave(updatedTask);
  };

  return (
    <View>
      <Text>Edit Task</Text>
      <TextInput
        onChangeText={(text) => setEditedName(text)}
        value={editedName}
      />
      {/* Add an image picker or editing for the task's image */}
      <Button title="Save" onPress={handleSave} />
      <Button title="Cancel" onPress={onCancel} />
    </View>
  );
};

export default EditTask;
