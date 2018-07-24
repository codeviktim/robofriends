import React from 'react';
  

const Scroll = (props)=>{
    return (
        <div style = {{overflowY : 'scroll', border:'0px light blue', height:'800px'}}>
          {props.children}
        </div>
    )
};
export default Scroll;
