
import React from 'react';

export default function MainContentWrapper(props) {
  const {ChildCompoenet,title} = props
  return (
    <div className='maincontentRoot'>
      <div className='maincontentScroll'>
        <div className='general-height-30'></div>
        <div className='container-fluid'>
          <div className='p-3 mb-5 bg-white shadow'>
            <div className='px-4'>
              <h5 className='text-black font-weight-bold'>{title || 'Results'}</h5>
              <div className='border general-height-10'></div>
            </div>

            <div className='p-2 general-width'>
             {/* Put Content Here  */}
             {ChildCompoenet}
                {/* Put Content Here  */}
            </div>
          </div>

          <div className='general-height-4'></div>
        </div>
      </div>
    </div>
  );
}
