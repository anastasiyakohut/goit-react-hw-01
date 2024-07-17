import css from './Profile.module.css'

export default function Profile({name, tag, location, image, stats}) {
    return (
        <div className={css.container}>
            <div className={css.user}>
                <img
                    src={image}
                    alt="User avatar"
                    className={css.userImg}
                />
                <p className={css.userName}>{name}</p>
                <p className={css.userTag}>@{tag}</p>
                <p className={css.userLocation}>{location}</p>
            </div>
            
            <ul className={css.list}>
                <li className={css.listItem}>
                    <span className={css.titleSpan}>Followers</span>
                    <span className={css.infoSpan}>{stats.followers}</span>
                </li>
                <li className={css.listItem}>
                    <span className={css.titleSpan}>Views</span>
                    <span className={css.infoSpan}>{stats.views}</span>
                </li>
                <li className={css.listItem}>
                    <span className={css.titleSpan}>Likes</span>
                    <span className={css.infoSpan}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}