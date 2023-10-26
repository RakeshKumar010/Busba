import {View, Text, FlatList, TouchableOpacity, StyleSheet,Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
import {data} from '../api/dataApi';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
const Dashboard = ({navigation}) => {
  const [busData, setBusData] = useState([]);

  useEffect(() => {
    async function getApi() {
      try {
        const busDetailsdata = await database().ref('busDetails').once('value');
        const data = busDetailsdata.val();
        const formattedData = Object.keys(data).map(key => ({
          id: key,
          ...data[key],
        }));
        setBusData(formattedData);
      } catch (error) {
        console.log(error);
      }
    }
    getApi();
  }, []);
  return (
    <View className="bg-gray-700 h-full" style={styles.container}>
      <View style={styles.headerView}>
        <Image source={require('../../assets/logoBUs.png')} style={styles.logo}/>
      <Text className="text-yellow-400  font-bold " style={styles.header}>
        My Active Bus
      </Text>
      </View>
      <View className='flex-1'>
        <FlatList
          style={styles.itemContainer}
          data={busData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View className=" bg-yellow-500" style={styles.itemView}>
              <View className="flex-row gap-2">
                <Text
                  style={styles.childText}
                  className=" text-white font-extrabold">
                  {item.startTime}
                </Text>
                <Text style={styles.childText} className=" text-white">
                  to
                </Text>
                <Text style={styles.childText} className=" text-white">
                  {item.endTime}
                </Text>
              </View>
              <Text style={styles.childText} className=" text-white ">
                {item.name} ({item.status})
              </Text>
              <Text style={styles.childText} className=" text-white ">
                No:- {item.mobile}
              </Text>
              <Text
                style={[styles.childText,{padding:heightPercentageToDP(1),borderRadius:heightPercentageToDP(1.3)}]}
                className=" text-white absolute right-3 bottom-3 bg-black">
                ₹{item.price}
              </Text>
            </View>
          )}
        />
      </View>
      <TouchableOpacity className="bg-gray-800 w-11/12 m-auto  rounded-3xl">
        <Text
          onPress={() => {
            navigation.navigate('addbus');
          }}
          className="text-white text-center " style={styles.addText}>
          Add Bus
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: heightPercentageToDP(1),
    display: 'flex',
    gap: heightPercentageToDP(2),
  },
  itemContainer: {
    display:'flex',
    padding: 2,
  },
  headerView:{
    // backgroundColor:'white',
    display:'flex',
    flexDirection:'row',
   alignItems:'center'
  
  },
  header: {
    fontSize: heightPercentageToDP(3),

  },
  childText: {
    fontSize: heightPercentageToDP(2.3),
    lineHeight:heightPercentageToDP(4)
  },
  itemView: {
    marginBottom: heightPercentageToDP(1.2),
    padding:heightPercentageToDP(2),
    borderRadius:heightPercentageToDP(2)

  },
  addText:{
    padding:heightPercentageToDP(1.6)
  },
  logo:{
    width:50,
    height:50,
    marginRight:9
  
  }

});

export default Dashboard;
