import EncryptedStorage from 'react-native-encrypted-storage';


const TOKEN_KEY = 'user_token';


export async function storeToken(token: string): Promise<boolean> {
    try {
        await EncryptedStorage.setItem(TOKEN_KEY, JSON.stringify({ token }));
        return true;
    } catch (e) {
        console.warn('Error storing token', e);
        return false;
    }
}


export async function getToken(): Promise<string | null> {
    try {
        const raw = await EncryptedStorage.getItem(TOKEN_KEY);
        if (!raw) return null;
        const obj = JSON.parse(raw);
        return obj?.token ?? null;
    } catch (e) {
        console.warn('Error reading token', e);
        return null;
    }
}


export async function clearToken(): Promise<boolean> {
    try {
        await EncryptedStorage.removeItem(TOKEN_KEY);
        return true;
    } catch (e) {
        console.warn('Error clearing token', e);
        return false;
    }
}