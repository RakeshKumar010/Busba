import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

import {data} from './api/dataApi';

const ViewTrain = () => {
  const [busData, setBusData] = useState([]);
   function getApi() {
    try {
      // const dbData = await firestore()
      //   .collection('testing')
      //   .doc('t3vvhcKWH2ls0eSQkdAK')
      //   .get();
      // console.log(dbData._data.name);
      setBusData(data);
     
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getApi();
  }, [data]);

  return (
    <>
 

      <View className="bg-gray-700 h-full p-2 flex-1">
        <FlatList
        
          data={busData}
          renderItem={({item}) => {
            return (
              <View className="p-4 m-2 rounded-2xl bg-yellow-500" key={item.id}>
                <View className="flex-row gap-4">
                  <Text className="text-2xl text-white font-extrabold">
                    {item.time}
                  </Text>
                  <Text className="text-2xl text-white">to</Text>
                  <Text className="text-2xl text-white">{item.timeEnd}</Text>
                </View>
                <Text className="text-2xl text-white mt-2">
                  {item.name} ({item.status})
                </Text>
                <Text className="text-2xl text-white mt-2">
                  No:- {item.number}
                </Text>
                <Text className="text-2xl text-white absolute right-3 bottom-3 bg-black p-2  rounded-xl">
                  ₹{item.price}
                </Text>
              </View>
            );
          }}
        />
       
      </View>
    </>
  );
};

export default ViewTrain;
