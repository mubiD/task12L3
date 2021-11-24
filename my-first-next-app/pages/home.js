import Layout from './index' //Import Layout

export default () => (
    <Layout className='aStyle'>
      <img className="img1" src="./img1.jpg" alt="#"></img>
      <style jsx>{`
            .img1{
                height: 100%;
                width: 100%;
            }
        `}</style>
    </Layout>
)