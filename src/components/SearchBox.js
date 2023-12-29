import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input className='pa3 b--green' onChange={searchChange} type='search' placeholder='search robots' />
        </div>
    );
}

export default SearchBox;