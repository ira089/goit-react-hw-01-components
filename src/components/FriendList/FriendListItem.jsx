import FriendList from './FriendList';

// const FriendListItem = ({ items }) => {
//   return (
//     <ul>
//       {items.map(item => (
//         <li key={item.id}>
//           <FriendList avatar={item.avatar} name={item.name} />
//         </li>
//       ))}
//     </ul>
//   );
// };

const FriendListItem = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <FriendList avatar={item.avatar} name={item.name} />
        </li>
      ))}
    </ul>
  );
};

export default FriendListItem;
