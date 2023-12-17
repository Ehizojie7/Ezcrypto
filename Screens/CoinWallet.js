import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons'

const CoinWallet = () => {

    const [hide, setHide] = useState(false)

    const hideBalance = () => {
        setHide(!hide)
    }

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

    <View style={{backgroundColor: 'green', padding: 30, borderRadius: 20}}>
        <Text style={{color: 'white', fontSize: 16}}>Ez Crypto will not be liable for any loss that may arise from you sending your crypto currency to an unintended wallet.</Text>
    </View>

    <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>

        <TouchableOpacity style={{backgroundColor: 'lightgreen', borderRadius: 20, padding: 20, width: 150, shadowOpacity: 1}}>
            <Text style={{textAlign: 'center'}}>Send</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor: '#fff', borderRadius: 20, padding: 20, width: 150, shadowOpacity: 1}}>
            <Text style={{textAlign: 'center', color: 'lightgreen', fontWeight: 'bold'}}>Receive</Text>
        </TouchableOpacity>
    </View>

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
})

export default CoinWallet