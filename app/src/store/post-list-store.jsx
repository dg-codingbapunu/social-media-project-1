import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currPostList, action) => {
  return currPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "pass ho bhai",
    body: "2 sal ke masti ke baad  bhi Mca pass ho gaye hard to Belive",
    userId: "user_90",
    reactions: 90,
    tags: ["pass", "MCA", "2 saal"],
  },
  {
    id: "2",
    title: "Going to chennai",
    body: "going to chennai for vacation enjoying my summer vacation ",
    userId: "user_19",
    reactions: 10,
    tags: ["Chennai", "Vacation", "Enjoying"],
  },
];
export default PostListProvider;
