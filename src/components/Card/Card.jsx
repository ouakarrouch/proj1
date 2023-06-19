import './Card.css';
import popular_01 from '../../assets/images/popular-01.jpg';
import popular_02 from '../../assets/images/popular-02.jpg';
import popular_03 from '../../assets/images/popular-03.jpg';
import popular_04 from '../../assets/images/popular-04.jpg';
import popular_05 from '../../assets/images/popular-07.jpg';
import popular_06 from '../../assets/images/popular-08.jpg';

import { FaStar } from "react-icons/fa";

const Card = (props) => {
  return (
   <>
    <div className='most-popular-item'>
              <div className='card-wrapper'>
                <img className='most-popular-item-image' src={props.img} />
                <div className='most-popular-content'>
                <h4 className='most-popular-title'>
            {props.title} <br />
            <span>{props.category}</span>
            <ul>
                <li><FaStar /><span>{props.rate}</span></li>
                <li><span>{props.download}</span></li>
            </ul>
        </h4>
       
    </div>
</div>
</div>
    

   
   </>
  )
}

export default Card
