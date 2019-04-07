import React from 'react';
import Navbar from '../Navbar/Navbar.js'
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className='heroPic'>
                <h1>Mccauley Finnegan</h1>
            </div>
            <div className='secondSection'> 
                <h1 className='secondTitle'>Build Your Brand with MC FINNY</h1>
                <h2 className='servicesTitle'>Services</h2>
                <div className='homePics'>
                    <img src='http://www.dealforsoftware.com/wp-content/uploads/2018/09/6198521760_aa86027669_z.jpg' alt='services pictures' className='gridPics'/>
                    <img src='http://www.dealforsoftware.com/wp-content/uploads/2018/09/6198521760_aa86027669_z.jpg' alt='services pictures' className='gridPics'/>
                    <img src='http://www.dealforsoftware.com/wp-content/uploads/2018/09/6198521760_aa86027669_z.jpg' alt='services pictures' className='gridPics'/>
                    <img src='http://www.dealforsoftware.com/wp-content/uploads/2018/09/6198521760_aa86027669_z.jpg' alt='services pictures' className='gridPics'/>
                </div>
            </div>
        </div>
    );
};

export default Home;