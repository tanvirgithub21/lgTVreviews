import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import useLodeData from '../CustomHooks/useLodeData/useLodeData';
import Dashboard from '../Dashboard/Dashboard';
import './HomePage.css';

const imageLink = "https://www.lg.com/uk/images/tvs/md05600897/gallery/medium01_LH590V_20160810_XL.jpg";
const HomePage = () => {

    const [users] = useLodeData();

    return (
            <div>
                <div className='homePageWrap sidePd'>
                    <div className="infoBox">
                    <h1>Welcome Home<br/> Choose your Best Product</h1>
                    <p>Experience the stunning picture quality only found on LG OLED TVs.</p>

                    <button>See More</button>
                    </div>
                    <div className="imageBox">
                        <img src={imageLink} alt="image" />
                    </div>
                </div>

                <div className='someReviewsBox sidePd'>
                        <h1>Customer Reviews</h1>
                    <div className="someReviews">
                    {
                        // <SomeReviews users={users}/>
                        users.slice(0, 3).map(user => <Card user={user} key={user.id}/>)
                    }
                    </div>

                    <div className='seeallbtn'>
                        <Link className='btn' to="/reviews" element={<Dashboard/>}>See All Reviews</Link>
                    </div>
                </div>

            </div>


        
    );
};

export default HomePage;