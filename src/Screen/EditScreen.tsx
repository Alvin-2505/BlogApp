import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from '../contexts/BlogContext';
import BlogPostForm from '../Components/BlogPostForm';

const EditScreen = ({route, navigation}) => {
  const id = route.params?.id;
  const {state, editBlogPost} = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === id);
  /* const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);
 */
  return (
    <BlogPostForm
      initialValues={{
        initialTitle: blogPost.title,
        initialContent: blogPost.content,
      }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  );
};

const style = StyleSheet.create({});

export default EditScreen;
