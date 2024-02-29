import { ScrollView, Text, View } from 'react-native';
import styles from './config/style.js';
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from './navigation/RootNavigator.jsx';


export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}