import React from 'react';
import 'tachyons';

const SearchBox=({searchfield,searchChange})=>
{
	return(
        <div className='pa2'>
        <input type='search' 
        placeholder='Search here' 
        className='pa3 ba b--green bg-lghtest-blue' 
        onChange={searchChange} 
        />
        </div>

		);
}
export default SearchBox;