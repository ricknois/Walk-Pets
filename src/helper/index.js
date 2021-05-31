import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, obj) => {
  try {
    const jsonValue = JSON.stringify(obj);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    throw new Error(e);
  }
};

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    throw new Error(e);
  }
};

export const formateDate = (date) => `${date.getHours()}:${date.getMinutes()}`;
