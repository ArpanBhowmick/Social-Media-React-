import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListData } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);

  return (
    <>
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>

          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mybtn mybadge"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete size={18} />
            <span className="visually-hidden">unread messages</span>
          </span>

          {/* <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {post.reaction}
            <span class="visually-hidden">unread messages</span>
          </span> */}

          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <a
              href="#"
              className="badge text-bg-primary me-1 hashtag"
              key={tag}
            >
              #enjoying
            </a>
          ))}
        </div>
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {post.reaction} peoples
        </div>
      </div>
    </>
  );
};

export default Post;
