import React from 'react'
import styles from './styles/Main.module.css'


export default function Main() {
    return (
        <section className="MainContainer">
            <div className="S1">
                <div className="WhoWrapper">
                    {/* <img src={Chat} /> */}
                    <div className="WhoWeAre">
                        <h2 className="Who">Who We Are</h2>
                        <p className="WhoText">Inclusive is a non-profit human services organization and social enterprise in NYC that serves individuals with I/DDs (Intellectual and/or Developmental Disabilities). We specialize in providing services to parents of children whose language development has been impeded by severe physical impairments, life-changing medical conditions, traumatic brain injuries, and many other factors.</p>
                        
                        <a href="#" className="A1">Learn More</a>  
                    </div>
                </div>
            </div>


        <section className="S2">
            <div className="SecondContainer">
                <div className="WhatWrapper">
                {/* <img src={Land} /> */}
                    <div className="WhatWeAre">
    
                        <h2 className="What">What We Do</h2>
                        <p className="WhatText">Outreach, workshops and training, and live phone support are a few ways Inclusive assists those with I/DD.</p>
                        <a href="#" className="A2">Learn More</a>
                    </div>
                </div>
            </div>
        </section>

        <section className="S3">
            <div className="ThirdContainter">
                <div className="ResWrapper">
                    <div className="Resources">
                        <h2 className="RTitle">Resources</h2>
                        <p className="RText">Here are a few resources that you mind find helpful. Have a look around. </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="S4">
            <div className="CardContainer">
                <div className="CardWrapper">

                    <div>
                        <div className="Card">
                            {/* <img className="Thumbnail1" src={Landscape} /> */}
                            <div className="CardContent">
                                <h3 classname="CardTitle1">Guide to Services</h3>
                                <p className="CardText1">The Online Resource Guide (ORG) provides you with an easy-to-use directory of speech therapy providers, services, and local resources.</p>
                            </div>
                        </div>
                    </div>
                    

                    <div>
                        <div className="Card">
                            {/* <img className="Thumbnail2" src={City} /> */}
                            <div className="CardContent">
                                <h3 classname="CardTitle2">Resource Directory</h3>
                                <p className="CardText2">The Inclusive navigation tool shows you the entire process, from request to service, and allows you to view each step in detail.</p>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className="Card">
                            {/* <img className="Thumbnail3" src={Nature} /> */}
                            <div className="CardContent">
                                <h3 classname="CardTitle3">Online Portal</h3>
                                <p className="CardText3">Join our online community to access and save resources, read reviews, and connect with local parents and professionals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="S5">
            <div className="FourthContainer">
                <div className="SubWrapper">
                    <div className="Subscribe">
                        <h2 className="SubTitle">Subscribe to Our Newsletter</h2>
                        <p className="SubText">Become a part of our community and gain access to helpful resources.</p>

                        <label className="EmailText">Enter Email Address </label>
                        <input className="InputField" type="email" name="email" placeHolder="example@email.com" required/>
                        <button className="SubButton">Subscribe</button>
                    </div>
                </div>
            </div>

        </section>









        </section>
    
        
    
    
    
    
    
    
    
     )
}





