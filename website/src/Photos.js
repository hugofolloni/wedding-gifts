import carrousel1 from "./assets/carrousel1.png"
import carrousel2 from './assets/carrousel2.png'
import carrousel3 from './assets/carrousel3.png'
import carrousel4 from './assets/carrousel4.png'
import carrousel5 from './assets/carrousel5.png'
import poster1 from './assets/poster1.png'
import poster2 from './assets/poster2.png'
import poster3 from './assets/poster3.png'
import poster4 from './assets/poster4.png'
import poster5 from './assets/poster5.png'
import poster6 from './assets/poster6.png'
import carrouselMain from './assets/carrousel-main.jpg'

const Photos = () => {
    return (  
        <div className="photos-div" id='mural'>
            <div className="line" />
            <h2 className="photos-title">Mural de Fotos</h2>
            <div className="carrousel">
                <div className="carrousel-imgs"><img src={carrouselMain} alt="main" width='1024px'/></div>
                <div className="carrousel-imgs"><img src={carrousel1} width='1024px' alt="main" /></div>
                <div className="carrousel-imgs"><img src={carrousel2} width='1024px' alt="main" /></div>
                <div className="carrousel-imgs"><img src={carrousel3} width='1024px' alt="main" /></div>
                <div className="carrousel-imgs"><img src={carrousel4} width='1024px' alt="main" /></div>
                <div className="carrousel-imgs"><img src={carrousel5} width='1024px' alt="main" /></div>
                <div className="carrousel-imgs"><img src={carrouselMain} alt="main" width='1024px'/></div>
            </div>
            <div className="posters">
                <img src={poster1} alt="" />
                <img src={poster2} alt="" />
                <img src={poster3} alt="" />
            </div>
            <div className="posters">
                <img src={poster4} alt="" />
                <img src={poster5} alt="" />
                <img src={poster6} alt="" />
            </div>
            <div className="bottom-photos">
                <div className="line" />
                <span className="weeding-date" onClick={() => window.location.href = "/admin"}>27/04/2024</span>
                <div className="line" />
            </div>
        </div>
        
    );
}
 
export default Photos;