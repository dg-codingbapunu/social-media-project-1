import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <>
      <div className="card post-card">
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger hower"
              onClick={() => deletePost(post.id)}
            >
              <MdDelete />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="badge text-bg-primary tags"
            >{`#${tag}`}</span>
          ))}

          <button type="button" className="btn btn-primary likes">
            {typeof post.reactions === "object" && post.reactions !== null ? (
              <>
                <span className="badge text-bg-secondary dislikes">
                  👍: {post.reactions.likes}
                </span>
                <span className="badge text-bg-secondary dislikes">
                  👎: {post.reactions.dislikes}
                </span>
              </>
            ) : (
              <span className="badge text-bg-secondary">{post.reactions}</span>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Post;
