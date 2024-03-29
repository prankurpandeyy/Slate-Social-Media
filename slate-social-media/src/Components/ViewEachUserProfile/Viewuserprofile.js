import {
  useEffect,
  useDispatch,
  useSelector,
  useParams,
} from "../../Utils/SystemUtils";
import {
  followUserFn,
  getUserDetailsByIdFn,
  unFollowUserFn,
} from "../../redux/reducers/usersSlice";

function Viewuserprofile() {
  const getUsersbyId = useSelector((state) => state.users.getUsersbyId);

  const paramsId = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetailsByIdFn(paramsId));
  }, [paramsId, dispatch]);

  const {
    _id,
    avatar,
    bgImg,
    fullName,
    followers,
    following,
    job_description,
  } = getUsersbyId;
  const imageBaseUrl = `https://picsum.photos/200/300`;

  return (
    <div>
      <div class="flex justify-center ">
        <div class="flex flex-col justify-center mt-2 items-center md:flex-row md:max-w-xl rounded-lg bg-gray-400 shadow-lg">
          <img
            class=" w-96 h-96  bg-white  md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={bgImg && bgImg ? bgImg : imageBaseUrl}
            alt=""
          />
          <div>
            <img
              src={avatar && avatar ? avatar : imageBaseUrl}
              class="rounded-lg w-24 ml-2 p-2 h-24 object-cover bg-gray-200 "
              alt="Avatar"
            />
          </div>

          <div class="p-2 flex flex-col justify-start">
            <span class="text-gray-900 text-xl font-medium ">
              {fullName && fullName}
            </span>
            <span class="text-gray-700 text-sm">
              {job_description && job_description}
            </span>

            <span class="text-gray-700 text-sm flex w-auto justify-center items-center">
              Followers: {followers && followers.length} , Following:{" "}
              {following && following.length} , Post :10
            </span>
            {following && following?.some((u) => u._id === _id) ? (
              <div className="flex justify-center">
                Unfollow
                <span
                  class="material-icons cursor-pointer text-red-500"
                  onClick={() => dispatch(unFollowUserFn(_id))}
                >
                  person_remove
                </span>
              </div>
            ) : (
              <div className="flex justify-center">
                Follow
                <span
                  class="material-icons cursor-pointer text-green-500"
                  onClick={() => dispatch(followUserFn(_id))}
                >
                  person_add
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewuserprofile;
