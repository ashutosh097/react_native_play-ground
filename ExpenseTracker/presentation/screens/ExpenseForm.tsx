import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

interface Props {
  onAdd: (title: string, category: string, amount: number) => void;
}

export const ExpenseForm: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.formCard}>
        <TextInput
          placeholder="Title"
          placeholderTextColor="#fff"
          style={[styles.input, styles.inputTitle]}
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          placeholder="Category"
          placeholderTextColor="#fff"
          style={[styles.input, styles.inputCategory]}
          value={category}
          onChangeText={setCategory}
        />
        <TextInput
          placeholder="Amount"
          placeholderTextColor="#fff"
          style={[styles.input, styles.inputAmount]}
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />
        <View style={styles.buttonWrapper}>
          <Button
            title="Add Expense"
            color="#1976D2"
            onPress={() => {
              if (!title || !category || !amount) return;
              onAdd(title, category, parseFloat(amount));
              setTitle("");
              setCategory("");
              setAmount("");
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10, alignItems: 'center', justifyContent: 'center' },
  formCard: {
    backgroundColor: '#1976D2',
    borderRadius: 16,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
    width: '100%',
    maxWidth: 400,
  },
  input: {
    marginVertical: 7,
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    color: '#fff',
    borderWidth: 1.5,
    borderColor: '#fff',
  },
  inputTitle: {
    backgroundColor: '#36A2EB',
  },
  inputCategory: {
    backgroundColor: '#FF6384',
  },
  inputAmount: {
    backgroundColor: '#FFCE56',
    color: '#333',
    borderColor: '#333',
  },
  buttonWrapper: {
    marginTop: 12,
    borderRadius: 8,
    overflow: 'hidden',
  },
});
