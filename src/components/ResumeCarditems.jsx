import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/collection.jpg';

function ResumeCarditems({ resume }) {
  return (
    <Link to={'/dashboard/resume/' + resume.resumeID + "/edit"}>
      <div className='relative h-[280px] w-[280px] mt-4 border rounded-lg overflow-hidden 
        hover:scale-105 transition-all hover:shadow-md shadow-primary'>
        {/* Image to cover the full div */}
        <img 
          src={img1} 
          alt="Resume Placeholder" 
          className='absolute top-0 left-0 w-full h-full object-cover' 
        />
        {/* Title displayed in a full-width div */}
        <div className='absolute bottom-0 left-0 w-full h-full flex items-end'>
          <div className='w-full bg-primary text-white text-center py-1'>
            {resume.title}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ResumeCarditems;
