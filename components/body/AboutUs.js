import Image from "next/image"
import Carousel from "../widgets/Carousel";


const AboutUs = () =>{
    const items = [
        {
          src: "https://www.hola.com/imagenes/estar-bien/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-m.jpg",
          altText: "Slide 1",
          caption: "",
          header: "",
          key: "1",
        },
        {
          src: "https://www.ecestaticos.com/image/clipping/4eb2fe1b771826cf037b432e11352dea/la-curiosa-historia-del-perro-que-ayudo-a-una-mujer-enferma-a-volver-a-mover-el-brazo.jpg",
          altText: "Slide 2",
          caption: "",
          header: "",
          key: "2",
        },
        {
          src: "https://dam.ngenespanol.com/wp-content/uploads/2019/10/perros-personalidad-2.jpg",
          altText: "Slide 3",
          caption: "",
          header: "",
          key: "3",
        },
      ];
    return(
        <section className="about-section">
            <div className="first-container">
                <h3>Acerca de Nosotros</h3>
                <div className="info parrafo">
                    <p>
                        Sed turpis nunc, laoreet sit amet fermentum sed, euismod ac justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                    <p>
                        Donec ut lectus semper, sollicitudin risus blandit, mattis felis. Nam non malesuada odio. Vestibulum vaius, arcu eget rutrum consequat, arcu lacus imperdiet arcu, id pulvinar arcu erat vel magna.
                    </p>
                    <p>
                        Ut commodo malesuada eros, quis consequat ante tincidunt ut. Suspendisse malesuada augue vitae nisi sollicitudin placerat.
                    </p>
                </div>
                <div className="slider-container">
                    <Carousel info={items} controles={false} autoPlay={true}/>
                </div>
            </div>
            <style jsx>
            {`
                h3{
                    text-align:center;
                    grid-column:1/3;
                }
                .info{
                    text-align:justify;
                    line-height:1.7em;
                    grid-column:1/2;
                    margin:auto;
                }
                .first-container{
                    display:grid;
                    grid-template-columns:repeat(2, 1fr);
                    gap:20px;
                }
                .slider-container{
                    grid-column:2/3;
                    grid-row:2/3;
                }
                @media (max-width: 900px){
                    .first-container{
                        display:grid;
                        grid-template-columns: 1fr;
    
                    } 
                    h3{
                        text-align:center;
                    }
                    .slider-container{
                        grid-column:1/3;
                        grid-row:3/4;
                    } 
                    
                    .info{
                        grid-column:1/3;
                    }
                }
            `}
            </style>
        </section>
    )
}

export default AboutUs