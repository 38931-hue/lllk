import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00ff22",
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 10
  },
  label: {
    color: "#c23737",
    fontSize: 16,
    fontWeight: "600"
  }
});