import treePaper from '../../assets/treePaper.png'
import masterImage from '../../assets/masterImage.png'
import ShopNow from '../Components/ShopNow'




export default function Section1() {
  return (
    <div className='homeSection1 py-5'>
        <div className="Container d-md-flex justify-content-center">
            <div>
                <img src={masterImage} alt='image' style={{maxWidth:"100%"}} />
            </div>

            <div className='ps-3 d-flex flex-column justify-content-center gap-4'>
                <div>
                    <img src={treePaper} alt='tree paper bg-Imge' />
                </div>
                <h5>Best Quality Products </h5>
                <h1>Join The Organic Movement!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <ShopNow />
            </div>

        </div>
    </div>
  )
}
