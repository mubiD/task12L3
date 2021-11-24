import Link from 'next/link' // Import Link

const Header = () => ( // The Header component builds a navigation bar that will reside within the Layout component.
    <div>
        <div className='navBar'>
            {/*All links that make up the navigation*/}
            <Link href="/">
            <a className='linkStyle'><b>Home</b></a> 
            </Link>
            <Link href="/about">
            <a className='linkStyle'><b>About</b></a>
            </Link>
            <Link href="/contact"> 
            <a className='linkStyle'><b>Contact</b></a>
            </Link>
            <Link href="/projects">
            <a className='linkStyle'><b>Projects</b></a>
            </Link>
        </div>
        <style jsx>{`
            .linkStyle{
                margin-right: 10; 
                text-decoration: none; 
                border-radius: 3px;
                color: black;
                font-family: Arial;
                font-size: 1em;
            }
            .navBar{
                background-color: white;
                margin-bottom: 4px;
            }
            a {
                padding: 10%; 
                
            }
        `}</style>
    </div>
)

export default Header;