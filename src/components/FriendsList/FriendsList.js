import PropTypes from "prop-types";
import FriendsListItem from "../FriendsList/FriendsListItem";
import s from "../FriendsList/FriendsList.module.css";

const FriendsList = ({ friends }) => (
  <ul className={s.friendList}>
    {friends.map((friend) => (
      <FriendsListItem key={friend.id} friend={friend} />
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.array,
};

export default FriendsList;
