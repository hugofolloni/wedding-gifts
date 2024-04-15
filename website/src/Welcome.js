import main from "./assets/main.jpg"

const Welcome = () => {
    return ( 
        <div className="welcome-div">
            <div className="left-main">
                <span className="span1-main">Nossa celebração</span>
                <h3 className="title-main">MARIA E JOÃO</h3>
                <span className="span2-main">Celebremos juntos o amor que os uniu! Escolha um presente especial para adornar o caminho desta nova jornada a dois. Sua contribuição será um toque de felicidade eterna no lar que estão construindo. Agradecemos por fazer parte deste capítulo inesquecível.</span>
            </div>
            <div className="right-main">
                <div className="crop-photo">
                    <img src={main} alt="main" />
                </div>
            </div>
        </div>
     );
}
 
export default Welcome;