import FriendListItem from 'components/FriendListItem/FriendListItem';

const FriendList = ({ items }) => {
    return (
        <ul className="friend-list">
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