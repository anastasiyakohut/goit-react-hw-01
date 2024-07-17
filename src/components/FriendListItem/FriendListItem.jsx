import css from './FriendListItem.module.css'

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <div className={css.friendCard}>
            <img src={avatar} alt="Avatar" className={css.friendAvatar} width="70" />
            <p className={css.friendName}>{name}</p>
            <p className={`${css.friendStatus} ${isOnline ? css.online : css.offline}`}>
                {isOnline ? "Online" : "Offline"}
            </p>
        </div>
    );
}