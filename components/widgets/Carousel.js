import { UncontrolledCarousel, Row, Col } from "reactstrap"


const Carousel = (props) =>{
    const item = props.info
    const controles = props.controles
    const autoPlay = props.autoPlay
    return(
        <Row>
            <Col md="12" className="mx-auto">
                <UncontrolledCarousel
                 items={item} 
                 controls={controles}
                 autoPlay={false}/>     
            </Col>   
        </Row>
    )
}

export default Carousel