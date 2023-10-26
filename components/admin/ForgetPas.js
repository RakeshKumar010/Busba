import {View, Text, Image, TextInput,TouchableOpacity, Alert, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { getAuth, sendEmailVerification } from "firebase/auth";
import { heightPercentageToDP } from 'react-native-responsive-screen';
const ForgetPas = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [errorMess, setErrorMess] = useState(null);

  const sendLink=async({})=>{
    try {
      const result= await auth().sendPasswordResetEmail(email)
      navigation.navigate('veriSucc')
      setErrorMess("")
 
    } catch (error) {
      console.log(error);
      setErrorMess(error)
     

      
    }

}
  return (
    <View className="bg-gray-700 h-full px-4">
      <View>
        <Image
          source={require('../../assets/otpverification.png')}
          className=" m-auto"
          style={{width:heightPercentageToDP(26),
          height:heightPercentageToDP(26)}}
        />
      </View>
      <View>
        <Text className='text-white font-bold' style={{fontSize:heightPercentageToDP(3.3)}}>
          Don't Worry.{'\n'}
          Enter your email and we'll send you a verfication code to reset your
          password 
        </Text>
        <TextInput value={email} placeholder='Enter your email' className=' text-white  border-white bg-gray-600' style={styles.intputBox} placeholderTextColor='lightgray' 
        onChangeText={(value)=>setEmail(value)}/>
        <TouchableOpacity className='bg-yellow-500  ' style={styles.btn} onPress={sendLink}>
            <Text style={{fontSize:heightPercentageToDP(2.6)}} className='text-center font-semibold text-white'>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  intputBox:{
    borderRadius:heightPercentageToDP(1.5),
    marginVertical:heightPercentageToDP(2),
    paddingHorizontal:heightPercentageToDP(2)

  },
  btn:{
    borderRadius:heightPercentageToDP(1.5),
    padding:heightPercentageToDP(1.5)
  }
})

export default ForgetPas;
