import {StyleSheet, Text, View, TextInput, ScrollView, Pressable, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import _ from 'lodash'
import Header from '../../components/header';

const Lab3 = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    async function getData(){
        setLoading(true)
        await fetch('https://api.jsonbin.io/v3/qs/64653605b89b1e22999fa203')
        .then((response) => {
            return response.json();
          })
        .then((data) => {
            setData(data.record);
            setLoading(false)
        });
    }

    return (
    <>
    <Header labNum={3}/>
    <ScrollView style={{
            flex: 1,
            backgroundColor: "#85BB65",
        }} 
        showsVerticalScrollIndicator={false}>

        <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#F9E076' : '#FFD700'}, styles.button]} onPress={getData}>
            <Text style={styles.text}>Завантажити</Text>
        </Pressable>
        {loading 
        ? <ActivityIndicator size="large" color="#0000ff" style={{marginTop: 100}}/> 
        : <View style={{marginTop: 30}}>{data.map((elem)=>{
            if(elem.address.toLowerCase().includes("ozerna")){
                return <View key={elem.id} style={{backgroundColor: 'white', borderColor: 'black', borderWidth: 1}}>
                    <Text style={styles.text}>{elem.id}</Text>
                    <Text style={styles.text}>{elem.initials}</Text>
                    <Text style={styles.text}>{elem.address}</Text>
                    <Text style={styles.text}>{elem.phone}</Text>
                </View>
            }
            return <View key={elem.id} style={{borderColor: 'black', borderWidth: 1}}>
                    <Text style={styles.text}>{elem.id}</Text>
                    <Text style={styles.text}>{elem.initials}</Text>
                    <Text style={styles.text}>{elem.address}</Text>
                    <Text style={styles.text}>{elem.phone}</Text>
                </View>
        })}</View>}
    </ScrollView>
    </>
    );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: 200
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    alignSelf: 'center'
  },
  res: {
    alignSelf: 'center',
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    marginTop: 20
  }
});

export default Lab3;