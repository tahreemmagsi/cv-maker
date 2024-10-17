import React, { useContext } from 'react';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Template21 = ({imageId}) => {
  const { resumeInfo } = useContext(ResumeinfoContext);
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL; 


  // Handle undefined resumeInfo
  if (!resumeInfo) {
    return <p>Loading...</p>;
  }

  const {
    firstName,
    lastName,
    jobTitle,
    address,
    phone,
    email,
    themeColor,
    summery,
    experience = [],
    education = [],
    skills = [],
    image,
  } = resumeInfo;

  // Define colors
  const mainHeadingColor = themeColor || '#2980b9'; // Bright Blue
  const subHeadingColor = themeColor || '#e74c3c'; // Bright Red

  return (
      <div className="max-w-screen-lg mx-auto bg-white shadow-xl rounded-lg p-6">
        <div className="flex items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300">
            <img 
              src={imageId ? `${imageBaseUrl}${imageId}` : image}           
              alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="ml-6">
            <h1 className="text-3xl font-bold">{`${firstName || ''} ${lastName || ''}`}</h1>
            <h2 className="text-xl">{jobTitle || 'No Job Title'}</h2>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            {skills.map((skill) => (
              <div key={skill.id} className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">{skill.rating}</span>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold">{skill.name}</p>
                  <div className="w-full bg-gray-300 rounded-full h-2 mt-1">
                    <div
                      className="h-2 rounded-full"
                      style={{ width: `${skill.rating * 20}%`, backgroundColor: subHeadingColor }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Experience & Education</h3>
            <div className="mt-4">
              <h4 className="text-xl font-semibold mb-2" style={{ color: mainHeadingColor }}>Experience</h4>
              {experience.map((exp) => (
                <div key={exp.id} className="mb-4">
                  <h5 className="text-lg font-semibold" style={{ color: subHeadingColor }}>{exp.title || 'No title'}</h5>
                  <p>{`${exp.companyName || 'No company name'}, ${exp.city || 'No city'}`}</p>
                  <p>{`${exp.startDate || 'No start date'} - ${exp.endDate || 'Present'}`}</p>
                  <p 
                    className="mt-2 text-gray-700" 
                    style={{ 
                      wordWrap: 'break-word', 
                      wordBreak: 'break-all', 
                      overflowWrap: 'break-word',
                      whiteSpace: 'normal'
                    }}>{exp.workSummery || 'No work summary'}</p>
                </div>
              ))}
              <h4 className="text-xl font-semibold mb-2 mt-6" style={{ color: mainHeadingColor }}>Education</h4>
              {education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <h5 className="text-lg font-semibold" style={{ color: subHeadingColor }}>{edu.degree || 'No degree'}</h5>
                  <p>{`${edu.universityName || 'No university'}, ${edu.startDate || 'No start date'} - ${edu.endDate || 'No end date'}`}</p>
                  <p 
                    className="mt-2 text-gray-700" 
                    style={{ 
                      wordWrap: 'break-word', 
                      wordBreak: 'break-all', 
                      overflowWrap: 'break-word',
                      whiteSpace: 'normal'
                    }}>{edu.description || 'No description'}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold" style={{ color: mainHeadingColor }}>Summary</h3>
          <p 
                    className="mt-2 text-gray-700" 
                    style={{ 
                      wordWrap: 'break-word', 
                      wordBreak: 'break-all', 
                      overflowWrap: 'break-word',
                      whiteSpace: 'normal'
                    }}>{summery || 'No summary provided'}</p>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold" style={{ color: mainHeadingColor }}>Contact</h3>
          <p className="flex items-center mb-2"><FaMapMarkerAlt className="mr-2" /> {address || 'No address provided'}</p>
          <p className="flex items-center mb-2"><FaPhoneAlt className="mr-2" /> {phone || 'No phone number provided'}</p>
          <p className="flex items-center"><FaEnvelope className="mr-2" /> {email || 'No email provided'}</p>
        </div>
      </div>
  );
};

export default Template21;
