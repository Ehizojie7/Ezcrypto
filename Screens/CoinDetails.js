import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const CoinDetails = ({route}) => {

  const { coin } = route.params
  const navigation = useNavigation()

  
  return (
    <SafeAreaView style={{margin: 10}}>

     

      <View style={{marginTop: 30, flexDirection: 'row', alignItems: 'center', gap: 10, paddingBottom: 10, marginLeft: 10}} key={coin.id}>

        <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Text style={styles.info}><AntDesign name="arrowleft" size={30} color="black" /></Text>
      </TouchableOpacity>

        <Image source={{uri: coin.image}} style={{width: 30, height: 30}}/>
        <Text style={styles.name}>{coin.name}  ({coin.symbol.toUpperCase()})</Text>
      </View>

      <ScrollView>

      <Text style={styles.price}>${coin.current_price.toLocaleString()}</Text>

      <View style={styles.main}>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10}}>
          <Text style={styles.info}>Market Cap Rank</Text>
          <Text style={styles.info}>#{coin.market_cap_rank}</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20}}>
          <Text style={styles.info}>Market Cap</Text>
          <Text style={styles.info}>${coin.market_cap.toLocaleString()}</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 10}}>
          <Text style={styles.info}>Fully Diluted Valuation</Text>
          <Text style={styles.info}>${coin.fully_diluted_valuation.toLocaleString()}</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20}}>
          <Text style={styles.info}>Market Cap / FDV Ratio</Text>
          <Text style={styles.info}>${coin.market_cap_rank}</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20}}>
          <Text style={styles.info}>Trading Volume</Text>
          <Text style={styles.info}>${coin.total_volume.toLocaleString()}</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20}}>
          <Text style={styles.info}>24H High</Text>
          <Text style={styles.info}>${coin.high_24h.toLocaleString()}</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20}}>
          <Text style={styles.info}>24H Low</Text>
          <Text style={styles.info}>${coin.low_24h.toLocaleString()}</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20}}>
          <Text style={styles.info}>Available Supply</Text>
          <Text style={styles.info}>${coin.circulating_supply.toLocaleString()}</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20}}>
          <Text style={styles.info}>Total Supply</Text>
          <Text style={styles.info}>${coin.total_supply.toLocaleString()}</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20}}>
          <Text style={styles.info}>Max Supply</Text>
          <Text style={styles.info}>${coin.total_supply.toLocaleString()}</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20}}>
          <Text style={styles.info}>All-Time High</Text>

          <View>
          <Text style={[{marginBottom: 3}, styles.info]}>${coin.ath.toLocaleString()}</Text>
          <Text style={styles.info}>{coin.ath_date.slice(0, 10)}</Text>
          </View>
         
        </View>


        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20}}>
          <Text style={styles.info}>All-Time Low</Text>

          <View>
          <Text style={[{marginBottom: 3}, styles.info]}>${coin.atl.toLocaleString()}</Text>
          <Text style={styles.info}>{coin.atl_date.slice(0, 10)}</Text>
          </View>
         
        </View>

      </View>
      
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    marginTop: 40,
    width: '100vw'
  },
  name: {
fontSize: 20,
fontWeight: `500`
  },
  price: {
    fontSize: 50,
    fontWeight: 'bold',
    marginLeft: 8,
    lineHeight: 55,
    marginTop: 20
  },
  info: {
    fontSize: 16,
fontWeight: `400`
  }
})

export default CoinDetails