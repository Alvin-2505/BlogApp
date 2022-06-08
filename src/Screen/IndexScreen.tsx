import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Context} from '../contexts/BlogContext';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const IndexScreen = () => {
  const {state, deleteBlogPost, getBlogPost} = useContext(Context);
  const navigation = useNavigation();

  useEffect(() => {
    getBlogPost();

    navigation.addListener('focus', () => {
      getBlogPost();
    });
  }, []);

  return (
    <View>
      <FlatList
        testID="flatList"
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              testID={`item ${item.id}`}
              onPress={() => navigation.navigate('Show', {id: item.id})}>
              <View style={style.row}>
                <Text style={style.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity
                  onPress={() => deleteBlogPost(item.id)}
                  testID={`delete-button ${item.id}`}>
                  <Icon name="trash" style={style.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

/* IndexScreen.navigationOptions = () => {
    return {
        headerRight: ()=> ( 
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Icon name='plus' size={30}/>
        </TouchableOpacity>
        ),
    };
}; */

const style = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 2,
    borderColor: 'black',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
