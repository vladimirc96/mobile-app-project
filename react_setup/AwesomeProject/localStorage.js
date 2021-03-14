import AsyncStorage from "@react-native-community/async-storage";

const LocalStorage = {
  getItem: async function (key) {
    try {
      let item = await AsyncStorage.getItem(key);
      return JSON.parse(item);
    } catch (err) {
      console.log(err);
    }
  },
  setItem: async function (key, value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  },
  removeItem: async function (key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (err) {
      console.log(err);
    }
  },
};

export default LocalStorage;
