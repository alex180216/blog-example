import { noCopy } from "../utils/noCopyUtils"

const Slider = () =>{
    return(
        <section className="slider-section">
            <div className="slider-hide"
                onMouseDown={noCopy}
                onSelect={noCopy}
                onDragStart={noCopy}
            >

            </div>
        </section>
    )
}

export default Slider