import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from "react-native";
import {Context} from "../contexts/BlogContext";
import Icon from 'react-native-vector-icons/Feather';


const IndexScreen = ({navigation}) => {
    const { state, deleteBlogPost, getBlogPost } = useContext(Context);

    useEffect(() => {
        getBlogPost();

        navigation.addListener('focus', ()=> {
            getBlogPost();
        });
    }, []);

    return (
        <View>
            <FlatList 
            data={state}
            keyExtractor={(blogPost)=> blogPost.title}
            renderItem={({item}) => {
                return (
                <TouchableOpacity onPress={()=>navigation.navigate('Show', {id: item.id})}>
                    <View style={style.row}>
                        <Text style = {style.title}>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                            <Icon name = 'trash' style={style.icon}/>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                );
            }}/>
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
        justifyContent:'space-between',
        paddingVertical: 20,
        borderTopWidth:2,
        borderColor: 'black'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    },
})

export default IndexScreen;

