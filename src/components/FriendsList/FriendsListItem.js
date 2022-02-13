import PropTypes from "prop-types";
import s from "../FriendsList/FriendsList.module.css";

const FriendsListItem = ({ friend }) => (
  // const { isOnline, avatar, name } = friend;

  <li className={s.item}>
    <span className={friend.isOnline ? s.statusOnline : s.statusOffline}>
      {friend.isOnline}
    </span>
    <img
      className={s.avatar}
      src={friend.avatar}
      alt="User avatar"
      width="48"
    />
    <p className={s.name}>{friend.name}</p>
  </li>
);

FriendsListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
export default FriendsListItem;
