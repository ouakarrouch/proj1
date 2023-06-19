import './Home.css'
import {  GamingLibrary,  Hero , MostPopular} from '../../sections/index';

const Home = () => {
  return (
    <>
        <Hero />
        <MostPopular />
        <GamingLibrary />
    </>
  )
}

export default Home