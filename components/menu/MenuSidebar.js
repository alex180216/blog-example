import Link from 'next/link'

const MenuSidebar = ()=>{
    return(
        <nav className="nav-menu">
            <Link href="/">
                <a>Inicio</a>
            </Link>
            <Link href="/blog">
                <a>Blog</a>
            </Link>
            <Link href="/productos">
                <a>Productos</a>
            </Link>
            <Link href="/conoceme">
                <a>Conóceme</a>
            </Link>
            <Link href="/contacto">
                <a>Contacto</a>
            </Link>

            <style jsx>
                {`
                   .nav-menu{
                        height:100%;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        flex-wrap: nowrap;
                        align-content: stretch;
                        justify-content: space-evenly;
                        align-items: stretch;                    
                   }
                   a{
                    color:white;
                    text-decoration: none;
                    text-align:center;
                    font-size:2.3em;
                    transition:0.2s;
                    }
                   a:hover{
                       color: #572364;
                       transition:0.2s;
                    }
                    @media (max-width: 1500px) {
                        a{
                            color:white;
                            text-decoration: none;
                            text-align:center;
                            font-size:1.3em;
                            transition:0.2s;
                        }
                   }
                
                `}
            </style>
        </nav>
    )
}

export default MenuSidebar