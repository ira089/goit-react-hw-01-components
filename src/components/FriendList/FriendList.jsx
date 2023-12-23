import styles from './FriendList.module.css';

const FriendList = ({ avatar, name }) => {
  return (
    <>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </>
  );
};

export default FriendList;
