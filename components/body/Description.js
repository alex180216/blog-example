
const Description = () =>{
    return(
        <section className="description-section">
            <div className="title-description">
                <h2>Welcome to Blog Example</h2>
            </div>
            <div className="parrafo">
                <p>
                    Neaty is simple and clean design HTML CSS template for any kind of website. Feel free to use this layout. Please tell your friends about TemplateMo website. Thank you. Suspendisse imperdiet, felis eu hendrerit pretium, sapien mauris blandit arcu, et accumsan neque est ut erat. Vivamus eget tellus euismod, interdum nibh at, eleifend justo. Quisque placerat ante in ex tempor, ultrices bibendum nunc finibus. Etiam luctus nec eros vel pulvinar.
                </p>
            </div>
            <style jsx>
            {`
                .title-description{
                    text-align:center;
                    font-size:1.7em;
                }
                .parrafo{
                    text-align:justify;
                    line-height: 1.7em;
                }
            `}
            </style>
        </section>
    )
}

export default Description