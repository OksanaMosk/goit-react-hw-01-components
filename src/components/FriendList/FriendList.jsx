import FriendListItem from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ items }) => {
    return (
      <ul className={css.friendList}>
            {items.map(item => (
            <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
            isOnline={item.isOnline}
          />
            ))
            }
        </ul>
    )

}

export default FriendList;