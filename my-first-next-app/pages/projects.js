import Layout from './index.js' //Import Layout
import Link from 'next/link' //Import Link(allows us to create links between pages)

const Contact = props => (
    <Layout>
    <h1 className="">My Projects</h1>
       <div className="aStyle">
            <Link  href="https://github.com/mubiD">
               <b><a className='anchor' target="_blank">Github</a></b>
            </Link>
       </div>
    
       <div className="aStyle">
            <Link href="https://dashboard.heroku.com/apps/itunes-api-m-dollie">
                <a className='anchor' target="_blank"><b>An app that interfaces with the iTunes API</b> 
                </a>
            </Link>
       </div>
       <style jsx>{`
            h1{
                text-align: center;

            }
            .aStyle {
                text-align: center;
                text-decoration: none;
                font-family: 'Arial';
                color: black;
                font-size: 25px;
                margin-bottom: 4px;
                margin-top:15px;  
            }
            .anchor {
                color: black;
                text-decoration: none;
                margin-bottom: 4px;
            }
            
        `}</style>
    </Layout>
  )
  
  export default Contact //Export Contact component