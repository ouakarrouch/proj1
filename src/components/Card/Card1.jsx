
import './Card.css';
import Clip_01 from '../../assets/images/clip-01.jpg'
import Clip_02 from '../../assets/images/clip-02.jpg'


import { FaStar } from "react-icons/fa";


const Card1 = (props) => {
  return (
   <>
   
   <div className='most-popular-item'>
              <div className='card-wrapper'>
                <img className='most-popular-item-image' src={props.img} />
                <div className='most-popular-content'>
                <h4 className='most-popular-title'>
            {props.title} <br />
             </h4>
            <ul>
                <li><FaStar /><span>{props.rate}</span></li>
            </ul>
             
    </div>
</div>
</div>
   
   </>
  )
}

export default Card1











