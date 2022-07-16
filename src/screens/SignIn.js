import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

const SignIn = ({navigation}) =>{


  return (
   <View style={styles.mainView}>
    <View style={styles.TopView}>
    <Image
        source={require('../../assets/logo.jpg')}
      />
    </View>
    <View style={styles.BottomView}></View>
   </View> 
  );
}

const styles = StyleSheet.create({
    mainView:{
        marginTop: 40,
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    TopView: {
        width: '100%',
        height: '40%',
        

    },

    BottomView:{
        width: '100%',
        height: '60%',
        backgroundColor: '#000',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    }
},
);

export default SignIn;
