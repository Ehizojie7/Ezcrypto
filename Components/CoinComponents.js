import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CoinComponents = ({coin}) => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>

    <ScrollView showsVerticalScrollIndicator={false}>

      <TouchableOpacity onPress={()=> navigation.navigate('Details', {coin})}>
      <View style={styles.container} key={coin.id}> 

      

        <View style={styles.name}>
        <Text>{coin.market_cap_rank}</Text>
          <View>
            <Image source={{uri: coin.image}} alt={coin.name} style={styles.image}/>
          </View>

          <View>
            <Text style={styles.coinName}> {coin.name.slice(0, 18)} </Text>
            <Text style={styles.coinSymbol}>{coin.symbol.toUpperCase()}</Text>
          </View>
        </View>

        <View>
          <Text style={styles.coinPrice}>${coin.current_price.toLocaleString()}</Text>
          <Text style={[{color: coin.price_change_percentage_24h >= 1 ? '#34C759' : 'red'}, styles.percentage]}>
            {coin.price_change_percentage_24h.toFixed(2)}%</Text>
        </View>
      </View>
      </TouchableOpacity>
    </ScrollView>
    
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 18,
    width: '100vw',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30
  },
  name: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: '100%'
  },
  coinName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4
  },
  coinPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginBottom: 4

  },
  coinSymbol: {
    fontSize: 14,
    color: '#A9ABB1',
    marginRight: 'auto',
    marginLeft: 3
  },
  percentage: {
    marginLeft: 'auto'
  }

})

export default CoinComponents