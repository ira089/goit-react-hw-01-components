const FriendList = ({ avatar, name }) => {
  return (
    <ul class="friend-list">
      <li class="item">
        <span class="status"></span>
        <img class="avatar" src={avatar} alt="User avatar" width="48" />
        <p class="name">{name}</p>
      </li>
    </ul>
  );
};

export default FriendList;
