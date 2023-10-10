import { Profile } from '/user.json'
import { Statistics } from '/user.json'
import { FriendList } from '/user.json'
import { TransactionHistory } from '/user.json'


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
      <Profile/>
      <Statistics/>
      <FriendList/>
      <TransactionHistory/>
    </div>
  );
};
