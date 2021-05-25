import Link from 'next/link'

const MenuSidebar = ()=>{
    return(
        <menu>
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
                    menu{
                        margin:0;
                        padding:0;
                        display:grid;
                        grid-template-columns: minmax(180px, auto);
                        /* grid-template-rows:repeat(auto-fit, minmax(100px, auto)); */
                        align-items:stretch;
                    }
                    a{
                        margin:auto;
                        font-size: 3vh;
                        padding:3vh;
                    }
                `}
            </style>
        </menu>
    )
}

export default MenuSidebar