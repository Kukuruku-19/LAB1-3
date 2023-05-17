import {StyleSheet, Text, View, TextInput, ScrollView, Pressable, Dimensions} from 'react-native';
import React, {useState} from 'react';
import _ from 'lodash'
import {
  LineChart,
} from "react-native-chart-kit";
import Header from '../../components/header';
const Lab2 = () => {

  const [Xn, setXn] = useState('-5.74')
  const [Xk, setXk] = useState('19.2')
  const [Xh, setXh] = useState('3')
  const [a, setA] = useState('5')
  
  const [arrX, setArrX] = useState([])
  const [arrY, setArrY]= useState([])


  function calculate(){

    if(isNaN(parseFloat(Xn)) || isNaN(parseFloat(Xk)) || isNaN(parseFloat(Xh)) || isNaN(parseFloat(a))){
      alert('Input Error')
      return
    }

    setArrX(_.range(parseFloat(Xn), parseFloat(Xk), parseFloat(Xh)).map((elem)=>{
      return Number(elem.toFixed(2))
    }))

    setArrY(_.range(parseFloat(Xn), parseFloat(Xk), parseFloat(Xh)).map((elem)=>{
      if(elem <= 0){
       return(Number((Math.pow(1/Math.tan(3*elem-1), 2)).toFixed(2)))
      }else if(0 < elem && elem <= a){
        return(Number((Math.pow(2 + elem*Math.E, -elem)).toFixed(2)))
      }else if(elem > a){
        return(Number((Math.pow(Math.sin(Math.pow(elem,2)),2)).toFixed(2)))
      }
    }))

  }


  return (
    <>
    <Header labNum={2}/>
    <ScrollView style={{
          flex: 1,
          backgroundColor: "#85BB65",
        }} 
        showsVerticalScrollIndicator={false}>
        
        <Text style={{fontSize: 20, alignSelf: 'center', marginTop: 10}}> Варіант № 11 </Text>
        <Text style={{fontSize: 20, alignSelf: 'center', marginTop: 10}}>xn - початкове значененя</Text>
        <TextInput style={{backgroundColor: 'white', margin: 15, fontSize: 20, padding: 5, }} value={Xn} onChangeText={(text)=> setXn(text)}/>
        <Text style={{fontSize: 20, alignSelf: 'center', marginTop: 10}}>xk - кінцеве значення</Text>
        <TextInput style={{backgroundColor: 'white', margin: 15, fontSize: 20, padding: 5, }} value={Xk} onChangeText={(text)=> setXk(text)}/>
        <Text style={{fontSize: 20, alignSelf: 'center', marginTop: 10}}>xh - крок</Text>
        <TextInput style={{backgroundColor: 'white', margin: 15, fontSize: 20, padding: 5, }} value={Xh} onChangeText={(text)=> setXh(text)}/>
        <Text style={{fontSize: 20, alignSelf: 'center', marginTop: 10}}>a</Text>
        <TextInput style={{backgroundColor: 'white', margin: 15, fontSize: 20, padding: 5, }} value={a} onChangeText={(text)=> setA(text)}/>

        <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#F9E076' : '#FFD700'}, styles.button]} onPress={calculate}>
            <Text style={styles.text}>Розрахувати</Text>
          </Pressable>

        {(arrX.length === 0 || arrY.length === 0) ? null: <LineChart
          data={{
            labels: arrX,
            datasets: [
              {
                data: arrY,
              }
            ],
          }}
          width={Dimensions.get('window').width - 16}
          height={220}
          chartConfig={{
            backgroundColor: "#fff",
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            color: (opacity = 1) => `black`,
          }}
          bezier
          style={{
            marginVertical: 8,
            alignSelf: 'center'
          }}
        />}
        {arrY.map((elem,index)=>{
          return <View key={index} style={{ paddingBottom: 30, marginLeft: 20}}>
              <Text style={styles.text}>x = {arrX[index]}; y = {elem}</Text>
          </View>
        })}
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
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
    color: 'white',
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

export default Lab2;