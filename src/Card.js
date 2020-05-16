import React from 'react';

const Card=({name,email,id,pics})=>
{
	return(
		<div className="bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5">
		<img alt='Colleges' height='200' width='200' src={pics} />
            
		<div> 
		<h2>{name}</h2>
		<p>{id}</p>
		 </div> 		
		</div> 
		);
}
export default Card;
//test?200x200 is not working