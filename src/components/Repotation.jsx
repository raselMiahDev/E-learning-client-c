import React from 'react';

const Repotation = () => {
    return (
        <div className='md:px-32 px-10 mt-10 grid md:grid-cols-4 lg:grid-cols-4 md:gap-10 gap-5'>
            <div className='text-center bg-green-50 p-7 rounded-xl'>
                <h1 className='text-5xl font-bold text-green-600'>29.3k</h1>
                <span>STUDENT ENROLLED</span>
            </div>
            <div className='text-center bg-orange-50 p-7 rounded-xl'>
                <h1 className='text-5xl font-bold text-orange-600'>32.4K</h1>
                <span>CLASS COMPLETED</span>
            </div>
            <div className='text-center bg-violet-50 p-7 rounded-xl'>
                <h1 className='text-5xl font-bold text-violet-600'>100%</h1>
                <span>SATISFACTION RATE</span>
            </div>
            <div className='text-center bg-yellow-50 p-7 rounded-xl'>
                <h1 className='text-5xl font-bold text-yellow-600'>354+</h1>
                <span>TOP INSTRUCTORS</span>
            </div>
        </div>
    );
};

export default Repotation;