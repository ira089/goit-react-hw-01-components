import FriendList from './FriendList';
import styles from './FriendList.module.css';

const FriendListItem = ({ items }) => {
  return (
    <ul className={styles.friendlist}>
      {items.map(item => (
        <li className={styles.item} key={item.id}>
          <FriendList
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendListItem;
