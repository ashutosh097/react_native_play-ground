import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Button, Dimensions } from "react-native";
import { Expense } from "../../domain/entities/Expense";
import { colors } from "../theme/colors";
import { ExpenseRepositoryImpl } from "../../data/repo/ExpenseRepoImpl";
import { GetExpenses } from "../../domain/usecases/GetExpense";
import { backupDatabase, listBackups, restoreDatabase } from "../../services/BackupService";
import { PieChart } from "react-native-chart-kit";
import { expenseColors } from '../theme/expenseTheme';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
const screenWidth = Dimensions.get('window').width;

function DashboardScreen() {
    const navigationRoute = useNavigation();
    const repo = new ExpenseRepositoryImpl();
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [backups, setBackups] = useState<string[]>([]);

    const load = async () => {
        const list = await new GetExpenses(repo).execute();
        setExpenses(list);
        setBackups(await listBackups());
    };

    //   useEffect(() => {
    //     load();
    //   }, []);

    useFocusEffect(
        React.useCallback(() => {
            load();
        }, [])
    );

    const categoryColors: Record<string, string> = {
        Food: '#FF6384',
        Transport: '#36A2EB',
        Shopping: '#FFCE56',
        Bills: '#4BC0C0',
        Other: '#9966FF',
    };

    const grouped = expenses.reduce((acc: Record<string, number>, e) => {
        acc[e.category] = (acc[e.category] || 0) + e.amount;
        return acc;
    }, {});

    const pieData = Object.entries(grouped).map(([category, amount]) => ({
        name: category,
        amount,
        color: categoryColors[category] || '#888',
        legendFontColor: '#333',
        legendFontSize: 14,
    }));

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Dashboard</Text>
            <PieChart
                data={pieData}
                width={screenWidth - 40}
                height={220}
                chartConfig={pieChartConfig}
                accessor={'amount'}
                backgroundColor={'transparent'}
                paddingLeft={'20'}
                absolute
            />

            <Text style={styles.subHeader}>Recent Expenses</Text>
            <FlatList
                data={expenses}
                keyExtractor={(item) => item.id?.toString() ?? Math.random().toString()}
                renderItem={({ item }) => (
                    <View style={styles.expenseCard}>
                        <View style={styles.expenseRow}>
                            <Text style={styles.expenseTitle}>{item.title}</Text>
                            <Text style={styles.expenseAmount}>₹{item.amount}</Text>
                        </View>
                        <View style={styles.expenseRow}>
                            <Text style={styles.expenseCategory}>{item.category}</Text>
                            <Text style={styles.expenseDate}>{new Date(item.createdAt || item.date).toLocaleDateString()}</Text>
                        </View>
                    </View>
                )}
                contentContainerStyle={{ paddingBottom: 16 }}
            />
            <Button title="Add Expense" onPress={() => {
                navigationRoute.navigate('AddExpence')
            }} color={expenseColors.button} />
            <Button title="Backup DB" onPress={async () => { await backupDatabase(); load(); }} color={expenseColors.button} />
            <Text style={styles.subHeader}>Backups</Text>
            {backups.map(path => (
                <Button key={path} title={path.split("/").pop() || path} onPress={async () => { await restoreDatabase(path); load(); }} color={expenseColors.button} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background, padding: 10 },
    header: { fontSize: 22, fontWeight: "bold", color: colors.text, marginVertical: 10 },
    subHeader: { fontSize: 18, color: colors.text, marginTop: 15 },
    item: { color: colors.text, paddingVertical: 5 },
    expenseCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        marginVertical: 6,
        marginHorizontal: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    expenseRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
    },
    expenseTitle: {
        fontWeight: 'bold',
        color: colors.text,
        fontSize: 16,
    },
    expenseAmount: {
        color: '#1976D2',
        fontWeight: 'bold',
        fontSize: 16,
    },
    expenseCategory: {
        color: '#888',
        fontSize: 14,
        fontStyle: 'italic',
    },
    expenseDate: {
        color: '#aaa',
        fontSize: 13,
    },
});

const pieChartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
};
export default DashboardScreen;
