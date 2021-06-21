import { Component } from 'react'
import Layout from '../components/layout/Layout'
import Slider from '../components/Slider'
import Description from '../components/body/Description'
class Home extends Component{
    
    render(){
        return(
            <Layout>
                <Slider/>
                <Description/>
            </Layout>
        )
    }
}

export default Home