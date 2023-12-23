import Profile from './profile/profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from './data/user';
import data from './data/data';
import friends from './data/friends';
import transactions from './data/transactions';

export const App = () => {
  console.log(data);
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

      <Statistics
        title="Upload stats"
        label={data[0].label}
        percentage={data[0].percentage}
      />
      <FriendList
        avatar={friends[0].avatar}
        name={friends[0].name}
        online="isOnline"
      />
      <TransactionHistory
        type={transactions[0].type}
        amount={transactions[0].amount}
        currency={transactions[0].currency}
      />
    </div>
  );
};
