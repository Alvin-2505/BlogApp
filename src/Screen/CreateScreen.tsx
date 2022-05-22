import React, { useContext } from "react";
import { StyleSheet} from 'react-native';
import { Context } from "../contexts/BlogContext";
import BlogPostForm from "../Components/BlogPostForm";
import { useNavigation } from "@react-navigation/native";

const CreateScreen = () => {
    const { addBlogPost } = useContext(Context);
    const navigation = useNavigation();
    return <BlogPostForm onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Index'));
    } } initialValues={{
        initialTitle: "",
        initialContent: ""
    }} />
};

const style = StyleSheet.create({});

export default CreateScreen;