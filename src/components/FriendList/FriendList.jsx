import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ items }) => {
  return (
    <ul className={styles.friendlist}>
      {items.map(item => (
        <li className={styles.item} key={item.id}>
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
