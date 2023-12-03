import './UserProfile.css'
import Penguin from './penguin-in-pink-background-with-mobile-showing-a-scanner.png'
function UserProfile({profile, loading}) {

  console.log(profile);
  if (loading) {
    return <><div className='profile'>
    <div className='profile-img header-img'><img src={Penguin} alt="" class='header-img'/></div>
    <div className='user-info'>
    <strong className='loading loading-text'>0000 0000 0000</strong>
      <p className='loading loading-text'>0000 000 000 0000</p>
      <span className='loading loading-text'>VALID</span> <span className='loading loading-text' >01/28</span>
    </div>
    
    </div>
   </>  
  }
  return (<>
    <div className='profile'>
  <div className='profile-img'><img src={profile.avatar_url} alt="" /></div>
  <div className='user-info'>
  <strong >{profile.name}</strong>
    <p>{profile.login}</p>
    <p>{profile.email}</p>
    <span>{profile.twitter_username}</span> <span>{profile.type}</span>
  </div>
  
  </div>
  
 </>  
  )
}
export default UserProfile;
