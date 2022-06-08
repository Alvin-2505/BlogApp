import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload;
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'edit_blogpost':
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};

const getBlogPost = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogposts');

    dispatch({type: 'get_blogposts', payload: response.data});
  }; //response.data === [{},{}]
};

const addBlogPost = () => {
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', {title, content});
    // dispatch({ type: 'add_blogpost', payload: {title: title, content: content}});
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = dispatch => {
  return async (id: any) => {
    await jsonServer.delete(`/blogposts/${id}`);

    dispatch({type: 'delete_blogpost', payload: id});
  };
};

const editBlogPost = dispatch => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, {title, content});

    dispatch({type: 'edit_blogpost', payload: {id, title, content}});
    if (callback) {
      callback(title, content, id);
    }
  };
};

export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlogPost, deleteBlogPost, editBlogPost, getBlogPost},
  [],
);

/*children is the prop we wish to pass from parent component to child component
 export const BlogProvider: React.FC<ChildrenType> = ({children}:ChildrenType) => {
    //const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [blogPosts, dispatch] = useReducer(blogReducer, []); 

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }]);
    }

     return <BlogContext.Provider value ={{data: blogPosts, addBlogPost: addBlogPost}}>
        {children}
    </BlogContext.Provider>;
};
 */
