import FriendListItem from '../FriendListItem/FriendListItem'
import css from './FriendList.module.css'

export default function FriendList({ friends }) {
        const render = friends.map((friend) => {
        return (
            <li key={friend.id}>
                <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            </li>
        );
    });

    return <ul className={css.friendList}>{render}</ul>;
}