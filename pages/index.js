import { Component } from 'react'
import Layout from '../components/layout/Layout'
import Slider from '../components/Slider'
import Description from '../components/body/Description'
import AboutUs from '../components/body/AboutUs'
class Home extends Component{
    
    render(){
        return(
            <Layout>
                <Slider/>
                <Description/>
                <AboutUs/>
            </Layout>
        )
    }
}

export default Home