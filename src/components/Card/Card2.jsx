import './Card.css'
import prof_01 from '../../assets/images/profile.jpg'
import { SecondaryButton } from '../Buttons/Buttons'
const Card2 = (props) => {
  return (
    <>
    
    
    <div className="row">
    <div className="row">
                <div className="col-lg-4">
                    <img src={props.img} alt=""  className='image-profile'/>
                </div>
                <div className="col-lg-4 align-self-center">
                    <div className="main-info header-text">
                      <span>{props.status}</span>
                      <h4>{props.name}</h4>
                      <p>{props.bio}</p>
                      <div className="main-border-button">
                        <SecondaryButton className="button-stream "> Start Live Stream </SecondaryButton>
                      </div>
                    </div>
                </div>
                <div className="col-lg-4 align-self-center main-profile">
                    <ul>
                      <li>Games Downloaded <span>{props.games}</span></li>
                      <li>Friends Online <span>{props.friends}</span></li>
                      <li>Live Streams <span>{props.livestreams}</span></li>
                      <li>Clips <span>{props.clips}</span></li>
                    </ul>
                </div>
        </div>
        </div>
    </>
  )
}

export default Card2
