import React from 'react'

 function Errorelement(props){
    const{field,type} = props;
    let message;
    if(type === 'required'){
        message = `${field} is required`
    }
    else if(type === 'pattern' && field ==='email')
        {
            message = `${field}@is equired`
        }
        else if(type ==='pattern' && field ==='password')
            {
                message="atleast 8 character long||Contains atleast one upper case letter||Contains atleast one lowercase lettter||Contains atleast one number  "
            }
    return(
        <span className='text-red-600'>{message}</span>
  );
}

export default Errorelement;
