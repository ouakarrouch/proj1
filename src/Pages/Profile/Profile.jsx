import './Profile.css'
import {  MostPopular2 ,GamingLibrary, MostPopular1} from '../../sections/index';

const Profile = () => {
  return (
    <>
        <h2 style={{color:"white", fontWeight :"bold" , textAlign:"center"}}>profile page</h2>
        
        <MostPopular2 />

        <MostPopular1 />
        
        <GamingLibrary />
        
    </>
  )
}

export default Profile