const FriendList = ({ avatar, name }) => {
  return (
    <>
      {/* <span className="status"></span> */}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
};

export default FriendList;
