import React, { useContext, useLayoutEffect } from "react";
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {Context} from '../contexts/BlogContext';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ShowScreen = ({route,navigation}) => {
    //console.log(route.params.id); 
    const { state } = useContext(Context); //state prop is the big list of the blogposts
    const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

    //const navigation = useNavigation();
    useLayoutEffect(() => {
    navigation.setOptions({ 
        headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: route.params.id})}>
            <FontAwesome name="pencil" size={30} />
            </TouchableOpacity>
            )});
        },[]);

    return (
    <View>
        <Text style = {style.title}>{blogPost.title}</Text>
        <Text style = {style.content}>{blogPost.content}</Text>
    </View>
    )
};

const style = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: 'blue',
        margin: 10,
        textAlign: 'center'
    },
    content: {
        fontSize: 18,
        margin: 10,
        textAlign: 'justify'
    }
});

export default ShowScreen;