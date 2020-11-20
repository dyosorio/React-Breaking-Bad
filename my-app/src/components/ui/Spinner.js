import React from 'react'
import spinner from '../../images/3-spinner.gif'

const Spinner = () => {
    return (
       <img src={spinner} style={{width: '100px', margin: 'auto',  display: 'block'}} alt='loading' />
    )
}
 
export default Spinner
