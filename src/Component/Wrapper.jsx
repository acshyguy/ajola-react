import React from 'react'


const Wrapper = (props) => {
  return (
    <div className= "max-w-sm rounded border-2 border-red-700 overflow-hidden shadow-lg ">
        <h1>Wrapper Wrapper</h1>
        {props.children}
        <h1>Wrapper Wrapper</h1>
    </div>
  );
};

export default Wrapper;

