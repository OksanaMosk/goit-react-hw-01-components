import user from "../user.json"
export default Profile;

function Profile(user) {
    return (
     <div className="profile">
  <div className="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      className="avatar"
    />
    <p className="name">{user.username}</p>
          <p className="tag">{user.tag}</p>
    <p className="location">{user.location}</p>
  </div>

  <ul className="stats">{user.stats}
    <li>
      <span className="label">{user.stats.followers}</span>
      <span className="quantity">1000</span>
    </li>
    <li>
      <span className="label">{user.stats.views}</span>
      <span className="quantity">2000</span>
    </li>
    <li>
      <span className="label">{user.stats.likes}</span>
      <span className="quantity">3000</span>
    </li>
  </ul>
</div>
    )
}