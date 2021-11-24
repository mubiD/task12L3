import Layout from './index';

function About (props){
    return(
        <div>
            <Layout>
            <h1 className="aboutP">About Me</h1>
            <p className="aboutP">I am Mubashir and I love JavaScript.</p>
            <style jsx>{`
                .aboutP{
                    text-align: center; 
                    margin: auto;
                    padding-top: 20px;
                    
                }
                
            `
            }</style>
            </Layout>
        </div>
    )
};

export default About;