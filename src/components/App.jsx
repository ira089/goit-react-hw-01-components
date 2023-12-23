import Profile from './profile/profile';
import Statistics from './Statistics/Statistics';
import user from './data/user';
import data from './data/data';

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
      {/* <Statistics stats={data} /> */}
    </div>
  );
};
