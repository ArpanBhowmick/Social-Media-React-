import { createContext, useReducer } from "react";



const DEFAULT_POSTLIST = [{
    id:"1",
    title:"Going to Mumbai",
    body:"hi friends , im going to Mumbai for my vacation,Hope i will enjoy and see the beauty of mumbai",
    reaction:"2",
    userID:"user-9",
    tags: ["vacation" , "Mumbai" , "Enjoying"]
},
{
    id:"2",
    title:"Pass ho gye ",
    body:"Pass after bhot mahanat ke baad, it was a tough journey ",
    reaction:"15",
    userID:"user-12",
    tags: ["Graduating" , "unbelievable"]
},
]


// Create Context

export const PostListData = createContext({
  postList: DEFAULT_POSTLIST,
  addPost: () => {},
  deletePost: () => {},
});



// Reducer function


const postListReducer = (currentPostList , action) => {
  
  let newPostList = currentPostList
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter((post) => post.id !== action.payload.postID);
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload , ...currentPostList ]
  }
    return newPostList

  
}


const PostListProvider = ({ children }) => {
  
  const [postList, displatchPostList] = useReducer(postListReducer , DEFAULT_POSTLIST);

  const addPost = (userId , postTitle , postBody , reactions , Tags) => {
    displatchPostList({
      type: "ADD_POST",
      payload:{
    id : Date.now(),
    title : postTitle,
    body : postBody,
    reaction : reactions,
    userID : userId,
    tags : Tags
},
    })
  };


  const deletePost = (postID) => {
    displatchPostList({
      type: "DELETE_POST",
      payload: {
        postID,
      }
    })
  };


  return (
    <PostListData.Provider
      value={{ postList, addPost, deletePost }}
    >
      {children}
    </PostListData.Provider>
  );
};



export default PostListProvider;
