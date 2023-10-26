import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP } from 'react-native-responsive-screen'

const VeriSucc = ({navigation}) => {
  return (
    <View className="bg-gray-700 h-full px-4">
     <View>
        <Image
          source={require('../../assets/complated.png')}
          className=" m-auto"
          style={{width:heightPercentageToDP(30),
          height:heightPercentageToDP(30)}}
        />
      </View>
      <View>
        <Text className='text-white font-bold text-center' style={{fontSize:heightPercentageToDP(2.6),
        marginBottom:heightPercentageToDP(2)}}>
         Check Your Email
        </Text>
        <Text className='text-white  text-center '  style={{fontSize:heightPercentageToDP(2.6),
        marginBottom:heightPercentageToDP(2)}}>
         Password reset link is sended
        </Text>
       
        <TouchableOpacity className='bg-yellow-500' style={{padding:heightPercentageToDP(2),
        borderRadius:heightPercentageToDP(1.5)}} onPress={()=>{
                navigation.navigate('admin')
            }}>
            <Text className='text-center font-semibold text-white' style={{fontSize:heightPercentageToDP(2.6)}} >Goto to LogIn</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default VeriSucc