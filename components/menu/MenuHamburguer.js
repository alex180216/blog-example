
import Link from 'next/link'
import CloseIcon from '../icons/CloseIcon'

const MenuHamburguer =(props) =>{
    return(
        <nav className="nav-menu">
            <button className="close-icon"
                onClick={props.handleClick}
                >
                <CloseIcon
                    color="white"
                    size={20}  
                />
            </button>
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
                    background-color: rgb(95 28 219);
                    position: fixed;
                    top: 0;
                    right: 30%;
                    left:0;
                    bottom: 0;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: nowrap;
                    align-content: center;
                    align-items: center;
                    justify-content: space-evenly;
                }
                .nav-menu a{
                    color:white;
                    text-decoration: none;
                }
                .close-icon{
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    background: transparent;
                    border: none;
                }
            `}
            </style>
        </nav>
    )
}

export default MenuHamburguer