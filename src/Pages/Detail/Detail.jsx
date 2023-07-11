import {  SectionWrapper } from '../../components'
import { DetailCom } from '../../sections'
import DetailData from '../../Data/DetailData'
import Cont from '../../components/cont/Cont'

const DataDetails = DetailData[0];


const Detail = () => {
  return (
   <>
    <SectionWrapper>
            <Cont img_detail={DataDetails.img} image_tabnel={DataDetails.image_tabnel} />
            <br /><br />
            <h1 style={{ textAlign: 'center' }}>Fortinite Details </h1>
            <br /><br />
            <DetailCom title={DataDetails.title} category={DataDetails.category} rate={DataDetails.rate} download={DataDetails.download} images_detail={DataDetails.images_detail} storage={DataDetails.storage} status={DataDetails.status} bio={DataDetails.bio} />
        </SectionWrapper>
   
   </>
  )
}

export default Detail
