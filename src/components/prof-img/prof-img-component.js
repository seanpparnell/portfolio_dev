import ProfImage from '../../images/prof-img.jpg'
import '../prof-img/prof-img-styles.css'


const ProfImg = () => {
  return (
    <div className='prof-img'>
      <img src={ProfImage} alt="headshot" />
      {/* <p>Sean Patrick Parnell</p> */}
    </div>
  )
}

export default ProfImg;