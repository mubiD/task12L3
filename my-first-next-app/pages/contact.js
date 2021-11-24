import Layout from './index' //Import Layout
import Link from 'next/link' //Import Link(allows us to create links between pages)

const Contact = props => (
    <Layout>
        <h1>Let's Talk!</h1>
        <p>lets talk about things bla bla bla</p>
        <div className="info">
            <span className='header'><b>
                Email: mubashirdollie65@gmail.com
                </b></span> 
            <div>
                <Link href="https://github.com/mubiD">
                <b> <a target="_blank">Github</a> </b>
                </Link>
            </div >
            <div>
                <Link href="https://www.linkedin.com/in/mubashir-dollie-24983b137/">
                    <b><a target="_blank">LinkedIn</a></b>
                </Link>
        </div>
      </div>
      <style jsx>{`
            h1{
                text-align: center;
            }
            p{
                text-align: center;
            }
            .info{
                text-align: center;
            }
        `}</style>
    </Layout>
);
  
  export default Contact