import { Component } from 'react'
import Layout from '../components/layout/Layout'
import Slider from '../components/Slider'

class Home extends Component{
    
    render(){
        return(
            <Layout>
                <Slider/>
            </Layout>
        )
    }
}

export default Home