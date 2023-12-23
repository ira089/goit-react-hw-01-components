import Profile from './profile/profile';
import StatisticsItem from './Statistics/StatisticsItem';
// import FriendList from './FriendList/FriendList';
import FriendListItem from './FriendList/FriendListItem';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from './data/user';
import data from './data/data';
import friends from './data/friends';
import transactions from './data/transactions';
// import Statistics from './Statistics/Statistics';

export const App = () => {
  console.log(friends);
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      {/* React homework template */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsItem title="Upload stats" items={data} />
      <FriendListItem items={friends} />;
      <TransactionHistory items={transactions} />
    </div>
  );
};
