import Navbar from "../navbar/Navbar";

const Layout = (props) =>{
    return(
        <div className="landing">
            <Navbar />
            <section>
                {
                    props.children
                }
            </section>
            <style jsx global>
                {`
                    body{
                        padding:0;
                        margin:0
                    }
                    .landing{
                        display:grid;
                        grid-template-columns: minmax(180px, 300px) minmax(300px, auto)
                    }
                `}
            </style>
        </div>
    )
}

export default Layout