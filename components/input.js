import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({ ...rest }) => {
  return <TextInput style={styles.field} {...rest} />;
};

export default Input;

const styles = StyleSheet.create({
  field: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 6
  }
});