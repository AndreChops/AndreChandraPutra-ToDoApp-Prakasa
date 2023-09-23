import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";

const AddTask = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");
  const [taskImage, setTaskImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      setTaskImage(result.uri);
    }
  };

  const handleAddTask = () => {
    // Create a task object with name and image
    const newTask = {
      id: Math.random().toString(), // Replace with a better ID generation method
      name: taskName,
      image: taskImage,
    };

    // Call the onAdd callback to add the task
    onAdd(newTask);
  };

  return (
    <View>
      <Text>Task Name:</Text>
      <TextInput onChangeText={(text) => setTaskName(text)} value={taskName} />
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

export default AddTask;
