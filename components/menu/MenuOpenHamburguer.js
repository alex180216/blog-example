import MenuIcon from "../icons/MenuIcon"

const MenuOpenHamburguer = (props) =>{
    return(
        <button className="open-hamburguer" onClick={props.handleClick}>
            <MenuIcon color="black" size={30}/>

            <style jsx>
                {`
                    .open-hamburguer{
                        background: transparent;
                        border: none;
                    }
                `}
            </style>
        </button>
    )
}

export default MenuOpenHamburguer