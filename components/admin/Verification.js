import { View, Text, TextInput, TouchableOpacity,Image } from 'react-native'
import React from 'react'

const Verification = ({navigation}) => {
  return (
    <View className="bg-gray-700 h-full px-4">
       <View>
        <Image
          source={require('../../assets/otpverification.png')}
          className="w-64 h-64 m-auto"
        />
      </View>
      <View>
        <Text className='text-white text-3xl font-bold'>
        Enter Password{'\n'}
          Verification Code
        </Text>
        <TextInput placeholder='Enter otp' className='text-xl text-white border-2 rounded-2xl px-3 my-5 border-white bg-gray-600' placeholderTextColor='lightgray'/>
        <TouchableOpacity className='bg-yellow-500 p-3 rounded-2xl ' onPress={()=>{
            navigation.navigate('complate')
        }}>
            <Text className='text-center text-xl font-semibold text-white'>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Verification