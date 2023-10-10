import  Profile  from './Profile/Profile'
import  Statistics  from './Statistics/Statistics'
import  FriendList  from './FriendList/FriendList'
import  TransactionHistory  from './TransactionHistory/TransactionHistory'
import user from '../components/user.json'
import data from '../components/data.json'

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
      
    >
      <Profile
  username={user.username}
  tag={user.tag}
  location= {user.location}
  avatar={user.avatar}
  stats= {user.stats}
    followers= {user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
    />
      
      <Statistics
       items={data}
        key={data.id}
        label={data.label}
        percentage={data.percentage}
      />
      <FriendList/>
      <TransactionHistory/>
    </div>
  );
};
