import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CoinList from './Screens/CoinList';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import CoinDetails from './Screens/CoinDetails';
import Home from './Screens/Home';
import CoinWallet from './Screens/CoinWallet';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';



const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const queryClient = new QueryClient();

function TabNaviagtor() {
  return (
    <Tab.Navigator>

      <Tab.Screen name='Homepage' component={StackNavigator} 
      options={{headerShown: false, tabBarIcon: ()=>
      (
        <AntDesign name="home" size={24} color="black" />
      )}} 
      />

      <Tab.Screen name='Market' component={CoinList} options={{tabBarIcon: () => (
        <Feather name="trending-up" size={24} color="black" />      
        )}}/>

      <Tab.Screen name='Wallet' component={CoinWallet} 
      options={{tabBarIcon: () => (
        <Ionicons name="ios-wallet-outline" size={24} color="black" />
      ), headerShown: false}}
      />
      
         </Tab.Navigator>
  )
}

 function StackNavigator () {
  return (
    <Stack.Navigator>
    
    <Stack.Screen name="Home" component={Home}  options={{headerShown: false}}/>
    <Stack.Screen name="Coin Market" component={CoinList} />
    <Stack.Screen name="Details" component={CoinDetails} options={{headerShown: false}}/>
  
  </Stack.Navigator>
  )
}




export default function App() {
  return (
    // <View style={styles.container}>

    <>
     <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      
    <TabNaviagtor />

    </NavigationContainer>
    </QueryClientProvider>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
