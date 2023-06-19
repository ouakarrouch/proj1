import './GamingLibrary.css'
import { GamingLibraryCard, SectionHeader, SectionWrapper} from '../../components'

import GamingLibraryData from '../../Data/GamingLabraryData'

const GamingLibrary = () => {

    const cards = GamingLibraryData.map(card => <GamingLibraryCard key={card.id} img={card.img}  title={card.title}   category={card.category}  date_added={card.date_added}  hours_played={card.hours_played}  downloaded={card.downloaded} />)
  return (
    <>
    <SectionWrapper>
       <SectionHeader>
            Most Popular
       </SectionHeader>
        <div className="gaming-library-cards">
            {cards}
        </div>
    </ SectionWrapper>
</>
  )
}

export default GamingLibrary