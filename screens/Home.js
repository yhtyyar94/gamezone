import React from 'react'
import { useState } from 'react'
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native'
import {globalStyles} from '../styles/global'


const Home = ({navigation}) => {
    const [reeviews, setReviews] = useState([
        {title:'Zelda, Breath of Fresh Air', rating: 5, body:'lorem ipsum', key: '1'},
        {title:'Gotta Catch Them All (again)', rating: 4, body:'lorem ipsum', key: '2'},
        {title:'Not So "Final" Fantasy', rating: 3, body:'lorem ipsum', key: '3'},
    ])

  

    return (
        <View style={globalStyles.container}>
           <FlatList 
            data={reeviews}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('Review Details', item)}>
                    <Text style={globalStyles.titleText}>{item.title}</Text>
                </TouchableOpacity>
            )}
           />
    
        </View>
    )
}

export default Home
