import Image from "next/image"



const AboutUs = () =>{
    return(
        <section className="about-section">
            <div className="first-container">
                <h3>About Us</h3>
                <div className="info">
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
                }
                .first-container{
                    display:grid;
                    grid-template-columns:repeat(2, 1fr);

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