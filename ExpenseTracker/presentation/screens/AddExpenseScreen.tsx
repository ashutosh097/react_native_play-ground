import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View } from "react-native";
import { AddExpense } from "../../domain/usecases/AddExpense";
import { ExpenseRepositoryImpl } from "../../data/repo/ExpenseRepoImpl";
import { ExpenseForm } from "./ExpenseForm";

function AddExpenseScreen(){

  const navigation = useNavigation();
  const repo = new ExpenseRepositoryImpl();

  return (
    <View>
      <ExpenseForm
        onAdd={async (title, category, amount) => {
          await new AddExpense(repo).execute({
            title,
            category,
            amount,
            createdAt: new Date().toISOString(),
          });
          navigation.goBack();
        }}
      />
    </View>
  );
};
export default AddExpenseScreen;
