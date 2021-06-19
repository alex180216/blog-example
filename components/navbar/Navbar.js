import {Component} from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import MenuSidebar from '../menu/MenuSidebar'
import MenuHamburguer from'../menu/MenuHamburguer'
import MenuOpenHamburguer from '../menu/MenuOpenHamburguer'


class Navbar extends Component{
    state ={
        menuVisible: false
    }
    

    handleCloseMenu = (e) =>{
        this.setState({
            menuVisible:false
        })
    }

    handleOpenMenu = (e) =>{
        this.setState({
            menuVisible:true
        })
    }
    render(){
        return(
            <div className="menu">
                <div className="menu-hamburguer">
                    <MenuOpenHamburguer 
                        handleClick={this.handleOpenMenu}/>
                   {
                        this.state.menuVisible && 
                            <MenuHamburguer 
                                className =""
                                handleClick={this.handleCloseMenu}/> 
                    }
                    
                </div>
                <div className="imagen">
                    <img src="https://image.flaticon.com/icons/png/512/1490/1490773.png"></img>
                </div>
                <div className="sidebar">
                    <MenuSidebar/>
                </div>
                        

                <style jsx>
                    {`
                        .menu{
                            width:100%;
                            display:grid;
                            grid-template-columns:1fr;
                            grid-template-rows: minmax(100px, 30%) 70%;
                            padding-top:10%;
                        }
                        .imagen{
                            text-align:center;
                            margin:auto;
                        }
                        img{
                            width:40%;
                            transition:0.7s;
                        }
                        img:hover{
                            width:80px;
                            transition:0.7s;
                        }
                        .menu-hamburguer{
                            display:none;
                        }

                        @media (max-width: 700px) {
                            img{
                                width:60px;
                                transition:0.7s;
                            }
                            .sidebar{
                                display:none;      
                            }
                            .menu{
                                display:flex;
                                align-items: center;
                                align-content: center;
                                justify-content: space-between;
                                padding:20px;
                            }
                            .menu-hamburguer{
                                display:block;
                            }
                            .imagen{
                                margin:0;
                            }
                            
                        }
                    `}
                </style>
            </div>
        )
    }
}

export default Navbar