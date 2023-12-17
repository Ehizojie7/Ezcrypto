import { View, Text, TouchableOpacity, StyleSheet, ScrollView, RefreshControl, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, Entypo, FontAwesome, FontAwesome5, Ionicons, Zocial } from '@expo/vector-icons'
import HomeComponent from '../Components/HomeComponent'
import { useNavigation } from '@react-navigation/native'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const Home = () => {

    const navigation = useNavigation()

    const [hide, setHide] = useState(false)

    const hideBalance = () => {
        setHide(!hide)
    }

    const [isRefreshing, setRefreshing] = useState(false);

    const queryClient = useQueryClient();
  
  
  
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h&locale=en'
  
    const getCoins = () => {
      return axios.get(url)
    }
  
    const {isLoading, isError, data} = useQuery({
      queryKey: ['crypto'],
      queryFn: getCoins
    })
  
  
    if(isLoading) {
      <SafeAreaView>
        <ActivityIndicator size='large' />
      </SafeAreaView>
    }
  
    if(data){
     
  
  console.log(data)
      
    }
  
    const onRefresh = () => {
      setRefreshing(true);
    
      queryClient.invalidateQueries('crypto'); // This will trigger the query to refetch
  
        setRefreshing(false);
    
    };

  return (
    <SafeAreaView style={styles.parent}>
        <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
        <Text style={{fontSize: 28, fontWeight: 'bold', lineHeight: 32}}>Ez Crypto</Text>
        <View>
            <Text><Ionicons name="notifications" size={24} color="black" /></Text>
        </View>
    </View>

    <View style={styles.balance}>
        <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'white', fontSize: 18, marginBottom: 14, marginRight: 20}}>Total Balance</Text>
            <TouchableOpacity onPress={hideBalance}>
                { hide ? <Entypo name="eye-with-line" size={22} color="white" /> :  <Text><AntDesign name="eyeo" size={22} color="white" /></Text>}
               
            </TouchableOpacity>
        </View>

        { hide ?  <Text style={{color: 'white', fontSize: 32, marginBottom: 14, lineHeight: 40, marginTop: 12}}>$******</Text> : <Text style={{color: 'white', fontSize: 32, marginBottom: 14, lineHeight: 40, marginTop: 12}}>$5,200,040.08</Text>}
        
    </View>

    <View style={styles.receive}>

        <View>
        <TouchableOpacity style={{borderRadius: 100, backgroundColor: 'lightgreen', padding: 14, shadowOpacity: 1}}>
            <Text style={{textAlign: 'center'}}><Zocial name="bitcoin" size={28} color="black" /></Text>
            
        </TouchableOpacity>
        <Text style={{fontWeight: 'semi-bold', fontSize: 18, marginTop: 8}}>Receive</Text>
        </View>
        

        <View>
        <TouchableOpacity style={{borderRadius: 100, shadowOpacity: 1, backgroundColor: 'lightgreen', padding: 14}} >
            <Text style={{textAlign: 'center'}}><FontAwesome name="send-o" size={28} color="black" /></Text>
       
        </TouchableOpacity>
        <Text style={{fontWeight: 'semi-bold', fontSize: 18, marginTop: 8, textAlign: 'center'}}>Send</Text>
        </View>
        

        <View>
        <TouchableOpacity style={{borderRadius: 100, shadowOpacity: 1, backgroundColor: 'lightgreen', padding: 14}}>
            <Text style={{textAlign: 'center'}}><FontAwesome5 name="exchange-alt" size={28} color="black" /></Text>
            
        </TouchableOpacity>
        <Text style={{fontWeight: 'semi-bold', fontSize: 18, marginTop: 8, textAlign: 'center'}}>Exchange</Text>
        </View>
       

        <View>
        <TouchableOpacity style={{borderRadius: 100, shadowOpacity: 1, backgroundColor: 'lightgreen', padding: 14}}>
            <Text style={{textAlign: 'center'}}><AntDesign name="caretup" size={28} color="black" /></Text>
           
        </TouchableOpacity>
        <Text style={{fontWeight: 'semi-bold', fontSize: 18, marginTop: 8, textAlign: 'center'}}>Buy</Text>
        </View>
       
    </View>

        <ScrollView showsVerticalScrollIndicator={false}>
        <HomeComponent data={data}/>
        </ScrollView>

        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
        />

    </ScrollView>
    </SafeAreaView>
     
    
  )
}

const styles = StyleSheet.create({
    parent: {
        marginHorizontal: 16
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12 
    },
    balance: {
        padding: 40,
        backgroundColor: 'green',
        borderRadius: 16,
        marginTop: 40,
        marginBottom: 24,
        shadowOpacity: 1
    },
    receive: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 25
       
    }
}      
   
)

export default Home