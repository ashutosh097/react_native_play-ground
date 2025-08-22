import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';

const TodoListComp = () => {
    const [taskName, setTaskName] = useState('')
    const [taskNames, setTaskNames] = useState<string[]>([])


    const addTODO=()=>{
        if(taskName.trim()){
            setTaskNames(old=>[...old,taskName])
            setTaskName('')
        }
    }

     const deleteTODO=(index:number)=>{
        setTaskNames(prev=>prev.filter((_,i)=>i!=index))
    }

    return (
        <View style={styles.container}>

            <Text style={styles.text}>Hello MR. Ashutosh, Please chekc your TODO</Text>
            <TextInput
                style={styles.input}
                value={taskName}
                onChangeText={setTaskName}
                placeholder='Add you task'
            />
            <View style={styles.button}>
                <Button
                    title={'Submit'}
                    onPress= {addTODO} />
            </View>
            <TODOList list={taskNames} onPress={deleteTODO}/>
        </View>
    );
};

type TodoProps = {
  list: String[];
  onPress: (index:number) => void; 
};

const TODOList = ({ list, onPress }: TodoProps) => {
  return (
    <FlatList
      data={list}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item, index }) => (
        <View style={styles.buttonContainer}>
          <Text style={styles.button}>{item}</Text>
          <Button
            onPress={() => onPress(index)}
            title="Delete"
          />
        </View>
      )}
    />
  );
};



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 8,
        margin: 16,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginBlock: 10,
        marginBottom: 20,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginVertical: 10,
        marginHorizontal: 24,
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        borderRadius: 8,
        marginBottom: 20,
        fontSize: 16,
    },
    text: {
        color: 'grey',
        fontSize: 18,
    },
});

export default TodoListComp;

