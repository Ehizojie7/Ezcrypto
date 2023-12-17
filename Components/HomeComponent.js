import { View, Text, SafeAreaView, ActivityIndicator, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const HomeComponent = ({data}) => {

   
    
  
  return (
    <SafeAreaView>
        <Text style={{marginTop: 30, marginBottom: 6, textAlign: 'center', fontSize: 28, fontWeight: 'bold', lineHeight: 32}}>Top 20 Coins by Market Cap</Text>

    <ScrollView showsVerticalScrollIndicator={false} >

        { data ? data.data.map((coin)=> (
          <>
            <View key={coin.id}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40}}>
              <Image  source={{url: coin.image}} style={{width: 30, height: 30}} />
              <View>
                  <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'semi-bold'}}>{coin.name}</Text>
                  <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'semi-bold'}}>${coin.current_price.length > 6 ? coin.current_price.toFixed(5).toLocaleString() : coin.current_price.toLocaleString()}</Text>
              </View>

              <View>
                  <Text style={{color: coin.price_change_percentage_24h > 0 ? '#34C759' : 'red'}}>{coin.price_change_percentage_24h.toFixed(2)}%</Text>
              </View>
          </View>
      </View>
          
          </>

        )) : null}
        </ScrollView>
       </SafeAreaView>
  )
}

export default HomeComponent