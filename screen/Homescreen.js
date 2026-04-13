import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Button from "../components/Button";

const HomeScreen = ({ navigation }) => {
  const goToCadastro = () => navigation.navigate("Cadastro");

  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>
        Bem-vindo ao Cadastro App
      </Text>

      <Button title="Ir para Cadastro" onPress={goToCadastro} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  heading: {
    fontSize: 22,
    marginBottom: 20
  }
});
