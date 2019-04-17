import React from 'react';
import Navbar from '../Navbar/Navbar.js'
import {Link} from 'react-router-dom'
import './Home.css'

const Home = (props) => {
    return (
        <div>
            <Navbar/>
            <div className='heroPic'>
                {/* <h1 className='heroTitle'>McCauley Finnegan</h1> */}
            </div>
            <div className='secondSection'> 
                <h1 className='secondTitle'>Words to tell them what you offer/why you</h1>
                <hr width="1" size="100" color='#fff' style={{borderLeft: 'dashed 2pt #F7A9A9'}}/>
                <h2 className='servicesTitle'>Services</h2>
                <div className='homePics'>
                    <img src='https://www.mcfinneganphotography.com/uploads/9/1/6/0/91608040/editor/portraits.png?1519180663' alt='services pictures' className='topLeft' onClick={() => props.history.push('/services')}/> 
                    <img src='https://www.mcfinneganphotography.com/uploads/9/1/6/0/91608040/editor/food.png?1519180934' alt='services pictures' className='topRight' onClick={() => props.history.push('/services')} />
                </div>
                <div className='thirdImageDiv'> 
                    <img src='https://www.mcfinneganphotography.com/uploads/9/1/6/0/91608040/editor/product.png?1519181385' alt='services pictures' className='bottomLeft' onClick={() => props.history.push('/services')} />
                </div>
                <hr width="1" size="100" color='#fff' style={{borderLeft: 'dashed 2pt #F7A9A9'}}/>
                <h1 className='thirdTitle'>Words to make them Like you</h1>
                <Link to='/contact' className='contactBtn'>Get In Touch </Link>
            </div>
        </div>
    );
};

export default Home; 