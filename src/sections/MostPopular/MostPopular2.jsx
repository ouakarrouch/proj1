import './MostPopular.css'

import {Card2, SectionHeader2, SectionWrapper2, PrimaryButton} from '../../components'
import MostPopularData2 from '../../Data/MostPopularData2'



const MostPopular2 = () => {


    const cards = MostPopularData2.map(e => <Card2 key={e.id} img={e.img}   />)

  return (
   <>
   
  
   
   <SectionWrapper2>
           <SectionHeader2>
           
           </SectionHeader2>
           <div className="most-popular-items">
                
                {cards}
                 
             </div>
            <PrimaryButton> Load More clips  </PrimaryButton>
        </ SectionWrapper2>
   
   
   
   
   </>
  )
}

export default MostPopular2
