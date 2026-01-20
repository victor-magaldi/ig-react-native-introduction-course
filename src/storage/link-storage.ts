import AsyncStorage from '@react-native-async-storage/async-storage';

const LINKS_STORAGE_KEY = "links-storage"

interface LinkStorage {
  id: string,
  name: string,
  url: string,
  category: string
}

const getData = async (): Promise<LinkStorage[]> => {
  const value = await AsyncStorage.getItem(LINKS_STORAGE_KEY);
  return value ? JSON.parse(value) : []
};

const setData = async (newLink: LinkStorage) => {
  try {
    const storage = await getData()
    const updatedStorage = JSON.stringify([...storage, newLink])

    await AsyncStorage.setItem(LINKS_STORAGE_KEY, updatedStorage)
  } catch (err) {
    throw err
  }
};

export const linksStorage = { getData, setData }