import Header from '../components/Header.js' //Import Header.

//This component 
const Layout = (props) => (
    <div>
        <div className='layoutStyle'>
            <h1 className='header'>MUBASHIR DOLLIE</h1> {/*Logo image*/}
            <Header /> {/*Header Component.*/}
            {props.children} {/*All the children that are in every instance of the Layout component.*/}
        </div>
        <style global-jsx>
        {`    .layoutStyle{
                    margin: 25px;
                    padding: 20px;
                    border-radius: 2px;
                    border: 2px solid grey;
                    background-color: rgb(236, 236, 236);
                    }
        `}</style> 
    </div>
)

export default Layout; //Export Layout component
