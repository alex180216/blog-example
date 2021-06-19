import Head from 'next/head'
import Navbar from '../navbar/Navbar'
import FooterLayout from '../footer/Footer'

const Layout = ({children}) =>{
    return(
        <div className="global-body">
            <Head>
                <title>Generic Blog</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/png" href="https://image.flaticon.com/icons/png/512/1490/1490773.png" />
            </Head>
            <header>
                <Navbar/>
            </header>
            <main>
            {
                children
            }
            </main>
            <footer>
                <FooterLayout>
                    <div>hola vengo desde layout y soy un footer</div>
                </FooterLayout>
            </footer>
        </div>
    )
}

export default Layout