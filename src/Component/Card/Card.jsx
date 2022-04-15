import React from 'react';
import Rating from '../Rating/Rating';
import "./Card.css";


const Card = ({user}) => {
    
    const {first_name,last_name, rating, text} = user;

    return (
        <div className='cardBoxWrap '>
            
            {/* info box and img  */}
            <div className="info">
                <div className="user">
                    <div className="userImg">
                        <img src={user?.image} alt="userImg" />
                    </div>

                    <div className="useInfo">
                        <div className="userName">
                            <h4>{first_name} {last_name}</h4>
                        </div>
                    </div>
                </div>
                <div className="rating">
                    <h3>{<Rating rating={rating}/>}</h3>
                </div>
            </div>

            {/* rating text details box */}
            <div className="text">
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Card;