import styles from './FriendList.module.css';

const FriendList = ({ avatar, name, isOnline }) => {
  return (
    <>
      {isOnline ? (
        <span className={styles.statusgreen}></span>
      ) : (
        <span className={styles.statusred}></span>
      )}
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
