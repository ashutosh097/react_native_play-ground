import React, { useEffect, useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { validateName, validateEmail } from '../utils/TextValidation';
import { useCreateUserMutation } from '../api services/api';
import { useNavigation } from '@react-navigation/native';
import { storeToken } from '../storage';

function UserLoginScreen() {
    const navigationRout = useNavigation();
  const [createUse, { data: loginData, isLoading: loginLoading, error: loginError }] = useCreateUserMutation();

    type userRequest = {
        name: string;
        email: string;
        password: string;
    }
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [showUsername, setShowUsername] = useState(false);

    // Show API response in alert when data changes
    useEffect(() => {
        if (loginData) {
            storeToken(loginData.token);
            navigationRout.replace('HomeScreen');
        }
        if (loginError) {
            Alert.alert('API Error', JSON.stringify(loginError));
        }
    }, [loginData, loginError]);

    const handleLogin = () => {
        if (validateEmail(email) && password.length > 0) {
            const userRequest: userRequest = {
                name,
                email,
                password
            };
            createUse(userRequest);
        }
        else {
            Alert.alert('Validation Failed', 'Please check your inputs');
        }
    }
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <Image src='' />
                {showUsername && <TextInput
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={setName}
                    value={name}
                    autoCapitalize="none"
                />}
                <TextInput
                    style={styles.input}
                    placeholder="email"
                    onChangeText={setEmail}
                    value={email}
                    autoCapitalize="none"
                    keyboardType='email-address'
                />
                <View style={[styles.input, { flexDirection: 'row', alignItems: 'center' }]}>
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(prev => !prev)}>
                        <Image
                            source={showPassword ? require('../../assets/visibility.png') : require('../../assets/visible.png')}
                            style={{ width: 24, height: 24, marginLeft: 8 }}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin}>
                    <Text style={styles.buttonTitle}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const styles = StyleSheet.create({
        container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
        title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24 },
        input: {
            width: '80%',
            height: 40,
            borderColor: '#1976D2',
            borderWidth: 1,
            borderRadius: 8,
            marginBottom: 16,
            paddingHorizontal: 10,
            backgroundColor: '#fff',
        },
        button: {
            width: '80%',
            height: 40,
            borderRadius: 8,
            marginBottom: 16,
            paddingHorizontal: 10,
            textAlign: 'center',
            backgroundColor: '#1976D2',
        },
        buttonTitle: { fontSize: 16, fontWeight: 'medium', color: '#fff', textAlign: 'center', lineHeight: 40 },

    });
    export default UserLoginScreen;