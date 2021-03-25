/* eslint-disable no-unused-vars */
import React,  {useMemo, useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {FaImage } from 'react-icons/fa';

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  };
  
  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
  };
  
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };
  
// basestyle css
const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
  const activeStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };


function CustomDropZone({ref}) {
  


// basestyle


    return (
   

<section className="">
<div>
  <input name='mediaLink' id='mediaLink' accept="image/*" ref={ref}  />
  <div className="p-5 text-center" style={{border: '1px solid #d1d3e2', borderRadius:'5px'}}>
        
       <div className="flex-row pb-5 d-flex justify-content-center align-items-center">
       <p style={{fontSize:'55px', color:'#20a74c'}}><FaImage /></p>
       </div>
        <h5 className="text-black font-weight-bold">Click Icon to Add Images</h5>
        <p className="text-black dropzone">Image should not exceed 25MB <br />
            Image should be in JPG, PDF or PNG format</p>
  </div>

</div>
<aside style={thumbsContainer}>

</aside>
</section>

    );
}

export default CustomDropZone;