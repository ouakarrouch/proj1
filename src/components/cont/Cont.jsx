
import './Cont.css'
import { FaPlay } from 'react-icons/fa'


const Cont = ({img_detail, image_tabnel}) => {
  return (
    <>
        <div className="row videodetails">
                  <div className="col-lg-4">
                    <img src={img_detail} alt="image1" loading=''/>
                  </div>
                  <div className="col-lg-8">
                    <div className="thumb">
                      <img src={image_tabnel} alt="image2" />
                      <a href="https://www.youtube.com/watch?v=r1b03uKWk_M"   rel="noreferrer" ><FaPlay color='var(--color-primary)'/> </a>
                    </div>
                    </div>
        </div></>
  )
}

export default Cont
