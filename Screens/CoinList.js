import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView, RefreshControl, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import CoinComponents from '../Components/CoinComponents'
import axios from 'axios'
import { useQuery, useQueryClient } from '@tanstack/react-query'


const CoinList = () => {

  const [isRefreshing, setRefreshing] = useState(false);

  const queryClient = useQueryClient();



  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=220&page=1&sparkline=false&price_change_percentage=24h&locale=en'

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
    <SafeAreaView>
      <ScrollView>

      { data ? data.data.map((coin)=>(
      <CoinComponents coin={coin} />
      )) 
    :
   <ActivityIndicator size={'large'} />
    
      
    }
     
      <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
        />
        

</ScrollView>

     
      
    </SafeAreaView>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     marginHorizontal: 18,
//     width: '100vw',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 30
//   },
//   name: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 4
//   },
//   image: {
//     width: 50,
//     height: 50,
//     borderRadius: '100%'
//   }

// })

export default CoinList