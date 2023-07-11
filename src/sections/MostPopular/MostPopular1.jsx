import './MostPopular.css'

import {Card, SectionHeader, SectionWrapper, PrimaryButton, SectionWrapper1, SectionHeader1} from '../../components'
import mostPopularData from '../../Data/MostPopularData1';




const MostPopular = () => {

   

    const cards = mostPopularData.map(card => <Card key={card.id} img={card.img}  title={card.title}    rate={card.rate}  download={card.download} />)

  return (
    <>


    
        <SectionWrapper1>
           <SectionHeader1>
           Your Most Popular Clips
           </SectionHeader1>
            <div className="most-popular-items">
                
               {cards}
                
            </div>

            <PrimaryButton> Load More clips  </PrimaryButton>
        </ SectionWrapper1>
    </>
    )
}

export default MostPopular