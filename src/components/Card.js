import React from 'react';
const Card = ({ id, name, email }) => {
    return (
        <div className='tc grow bg-lightest-blue br3 pa3 ma2 dib bw2 shadow-5' id={id}>
            <img src={`https://robohash.org/${name}?200x200`} alt='robot' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;