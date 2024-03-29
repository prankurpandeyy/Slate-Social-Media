import { useDispatch, useSelector, Link } from "../../Utils/SystemUtils";
import {
  addPostToBookmarkFn,
  deletePostFn,
  dislikesPostFn,
  editPostFn,
  likesPostFn,
  removeBookmarkedPostsFn,
} from "../../redux/reducers/postsSlice";

function Postcard({ postdata }) {
  const {
    avatar,
    fullName,
    _id,
    username,
    content,
    createdAt,
    image,

    likes,
    comments,
    likes: { likeCount, likedBy, dislikedBy },
  } = postdata;

  const getUserDetails = useSelector((state) => state.users.getUserDetails);
  const isLiked = likes.likedBy.find(
    (likedUser) => likedUser?.username === getUserDetails.username
  );
  const dispatch = useDispatch();
  const addToBookmarks = useSelector((state) => state.posts.addToBookmarks);

  return (
    <div className="flex flex-col justify-center items-center  mt-4  ">
      <div
        className="h-auto w-96 flex flex-col justify-start items-center
     md:flex-row md:max-w-xl rounded-lg bg-gray-600 shadow-lg 
    "
      >
        <div class="h-auto">
          <div class="flex p-1">
            <img src={avatar} alt="avatar" className="rounded-full h-12 w-12" />

            <div class="flex flex-col p-1">
              <span className="text-sm">{fullName}</span>
              <span className="text-sm">{username} </span>
              <span className="text-sm font-mono ">{createdAt}</span>
            </div>
          </div>

          <div
            class="flex p-2
        flex-col justify-center items-start"
          >
            <p>{content}</p>
          </div>
          <hr className="w-96" />
          <div class="content-container">
            <div class="content-data">
              {image ? (
                <img class="w-full p-2 h-auto" src={image} alt="images" />
              ) : (
                <div>{null} </div>
              )}
            </div>
          </div>

          <div class="flex justify-between items-center w-96 p-2">
            <div class="flex justify-center items-center">
              {likeCount}
              {getUserDetails?.username === isLiked?.username &&
              getUserDetails?._id ? (
                <span
                  class="material-icons 
                 text-red-400 hover:text-red-600 cursor-pointer
                  "
                  onClick={() => dispatch(dislikesPostFn(_id))}
                >
                  favorite
                </span>
              ) : (
                <span
                  class="material-icons text-gray-400 hover:gray-red-600 cursor-pointer"
                  onClick={() => dispatch(likesPostFn(_id))}
                >
                  favorite_border
                </span>
              )}
            </div>
            <div class="flex justify-center items-center">
              {comments.length}
              <Link to={`/comments/${_id}`}>
                <div
                  class="material-icons flex  justify-center items-center
               text-blue-400 hover:text-red-600 cursor-pointer
              "
                >
                  textsms{" "}
                </div>
              </Link>
            </div>
            <div class="flex justify-center items-center">
              {addToBookmarks.some((prod) => prod._id === postdata._id) ? (
                <span
                  class="material-icons flex  justify-center items-center 
                 text-red-400 hover:text-red-600 cursor-pointer
                "
                  onClick={() => dispatch(removeBookmarkedPostsFn(_id))}
                >
                  bookmark
                </span>
              ) : (
                <span
                  class="material-icons flex  justify-center items-center  text-green-400 hover:text-green-600 cursor-pointer"
                  onClick={() => dispatch(addPostToBookmarkFn(_id))}
                >
                  bookmark_border
                </span>
              )}
            </div>
            <div class="flex justify-center items-center">
              <Link to={`/edit/${_id}`}>
                <span
                  class="material-icons flex  justify-center items-center 
                   text-blue-400 hover:text-red-600 cursor-pointer"
                  onClick={() => dispatch(editPostFn(_id, image, content))}
                >
                  edit
                </span>
              </Link>
            </div>
            <div class="flex justify-center items-center">
              <div
                class="material-icons flex  justify-center items-center text-red-400 hover:text-red-600 cursor-pointer "
                onClick={() => dispatch(deletePostFn(_id))}
              >
                delete
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Postcard;
