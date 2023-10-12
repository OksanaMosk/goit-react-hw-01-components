import css from './Profile.module.css'

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
  <div className={css.profile}>
    <div className={css.description}>
        <img
          src={avatar}
          alt={username}
          className={css.avatar}
        width="200"   
    />
    <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
    </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>followers</span>
          <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li>
          <span className={css.label}>views</span>
          <span className={css.quantity}>{stats.views}</span>
    </li>
    <li>
          <span className={css.label}>likes</span>
          <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}
    
export default Profile;