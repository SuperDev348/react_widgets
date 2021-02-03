import React, {Component} from 'react';


const Rif =({condition, children})=>{

    if (condition) {
        return children;
    } else 
        return null

}
export default Rif