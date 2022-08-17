import '../styles/Intro.css'
import Universe from '../../videos/universe.mp4'
import ProfImg from '../prof-img/prof-img-component'

const Intro = () => {
  return(
    <>
      
          <div className='intro'>
            <div>
              <ProfImg />
            </div>
            <video loop autoPlay muted>
              <source
                src={Universe}
                type="video/mp4"
              />
            </video>
          </div>

      
    </>
  )
}

export default Intro;