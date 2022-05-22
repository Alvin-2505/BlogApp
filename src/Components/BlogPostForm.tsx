import React, {useState} from "react";
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const BlogPostForm = ({onSubmit, initialValues={initialTitle:'', initialContent:''}}) => {
    const [title, setTitle] = useState(initialValues.initialTitle);
    const [content, setContent] = useState(initialValues.initialContent);

    return (
        <View>
            <Text style={style.label}>Enter Title:</Text>
            <TextInput style={style.inputField} value={title} onChangeText={text => setTitle(text)}/>
            <Text style={style.label}>Enter Content:</Text>
            <TextInput style={style.inputField} value={content} onChangeText={content =>setContent(content)} />
            <Button title='Save Blog Post' onPress={()=>onSubmit(title,content)

                /* addBlogPost(title,content, ()=>{
                    navigation.navigate('Index'); */
            }/>
        </View>
    );
};

/* BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}; */ //deprecated~

const style = StyleSheet.create({
    inputField: {
        borderWidth: 1,
        fontSize: 18,
        borderColor: 'black',
        padding: 5,
        margin: 10
    },
    label: {
        fontSize: 20,
        fontWeight:'bold',
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 10
    }
});

export default BlogPostForm;