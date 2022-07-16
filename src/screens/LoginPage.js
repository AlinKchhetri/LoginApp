import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native';
import Checkbox from 'expo-checkbox';

const LoginPage = ({navigation}) =>{

    const [agree, setagree] = useState(false);
    
    const [userName, setuserName] = useState("");
    const [Password, setPassword] = useState("");

    const SubmitEvent = () =>{
        if (userName === "admin" && Password === "admin") {
            navigation.navigate('home');
        } else {
            Alert.alert('Invalid Username or Password');
        }
    };

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.LoginText}>Login</Text>
      <Text style={styles.DescText}>Send an email at any@gmail.com</Text>
      <View style={styles.InputContainer}>
        <Text style={styles.LabelText}>Enter your Username</Text>
        <TextInput style={styles.InputBox}
        autoCapitalize="none" 
        autoCorrect= {false}
        value={userName}
        onChangeText={(actualData)=> setuserName(actualData)}
        />
      </View>
      <View style={styles.InputContainer}>
        <Text style={styles.LabelText}>Enter your Password</Text>
        <TextInput style={styles.InputBox}
        autoCapitalize="none" 
        autoCorrect= {false}
        secureTextEntry ={true}
        value={Password}
        onChangeText={(actualData)=> setPassword( actualData)}
        />
      </View>
      <View style={styles.Checkbox}>
        <Checkbox
        value={agree}
        onValueChange ={()=> setagree(!agree)}
        color = {agree ? "blue" : undefined}
        />
        <Text style={styles.CheckBoxText}>I agree with the T&C.
        </Text>
      </View>  
      <TouchableOpacity
      style={[styles.BtnStyle, {backgroundColor: agree ? "blue" : "grey"}]}
      disabled = {!agree}
      onPress ={() => SubmitEvent()}>

      <Text style={styles.BtnText}> Login </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'white',
        // margin: 20,
        // paddingHorizontal: 30,
        // paddingTop: 40,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding: 20,
    height: '100%',
    backgroundColor: 'white',
    paddingBottom:100,

    },
    LoginText: {
        margin: 20,
        padding: 20,
        fontWeight: 'bold',
        fontSize: 35,
    },
    DescText: {
        fontSize: 15,
        color: 'grey',
    },
    InputContainer: {
        padding: 10,
        display: 'flex',
        // justifyContent: 'space-between',

    },
    LabelText: {
        textAlign:'center',
        fontSize: 14,
        color: "grey",
        paddingBottom: 10,
    },
    InputBox: {
        borderWidth: 2,
        height: 30,
        width: 210,
        borderColor: 'grey',
        borderRadius: 5,
    },
    Checkbox: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
    },
    CheckBoxText: {
        paddingLeft:10,
        fontSize: 15,
        color: 'grey',
    },
    BtnStyle: {
        margin: 20,
        paddingVertical: 10,
        paddingHorizontal: 80,
        borderRadius: 5,
    },

    BtnStyle2: {
        margin: 20,
        paddingVertical: 30,
        paddingHorizontal: 80,
        borderRadius: 5,
    },

    BtnText: {
        fontSize: 20,
        color: 'white',
    },
    BtnText2: {
        fontSize: 20,
        color: 'black',
    },
},
);

export default LoginPage;
