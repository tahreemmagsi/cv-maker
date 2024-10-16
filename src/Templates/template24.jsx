import React, { useContext } from 'react';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Template24 = ({imageId}) => {
  const { resumeInfo } = useContext(ResumeinfoContext);
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL; 

  console.log(imageId,'img idd');

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
  const mainColor = themeColor || '#3498db'; // Blue
  const accentColor = '#e74c3c'; // Red
  const sectionColor = '#f5f5f5'; // Light Gray
  const textColor = '#333'; // Dark Gray

  return (
      <div className="relative max-w-screen-lg mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_#3498db,_#e74c3c)] h-full z-0"></div>
        
        <div className="relative z-10">
          <div className="relative bg-gradient-to-r from-blue-500 via-red-500 to-red-500 text-white shadow-lg p-6 flex items-center justify-center flex-col md:flex-row">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-6 md:mb-0 md:mr-6">
              <img
              src={imageId ? `${imageBaseUrl}${imageId}` : image}           
              alt="Upload Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-white mb-2">{`${firstName || ''} ${lastName || ''}`}</h1>
              <h2 className="text-xl font-semibold text-white mb-4">{jobTitle || 'No Job Title'}</h2>
              <div className="text-white mb-4">
                <p className="flex items-center mb-2"><FaMapMarkerAlt className="mr-2" /> {address || 'No address provided'}</p>
                <p className="flex items-center mb-2"><FaPhoneAlt className="mr-2" /> {phone || 'No phone number provided'}</p>
                <p className="flex items-center"><FaEnvelope className="mr-2" /> {email || 'No email provided'}</p>
              </div>
            </div>
          </div>

          {/* Content Below Header */}
          <div className="relative z-10 p-6">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/3 pr-4">
                {/* Summary Section */}
                <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: sectionColor }}>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: mainColor }}>
                    Summary
                  </h3>
                  <p className="text-gray-800">{summery || 'No summary provided'}</p>
                </div>

                {/* Experience Section */}
                <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: sectionColor }}>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: mainColor }}>
                    Experience
                  </h3>
                  {experience.length > 0 ? (
                    experience.map((exp) => (
                      <div key={exp.id} className="mb-6">
                        <div className="p-4 border rounded-lg" style={{ borderColor: accentColor }}>
                          <h4 className="text-xl font-semibold mb-2" style={{ color: accentColor }}>
                            {exp.title || 'No title'}
                          </h4>
                          <p className="text-gray-700 mb-1">
                            {`${exp.companyName || 'No company name'}, ${exp.city || 'No city'}, ${exp.state || 'No state'}`}
                          </p>
                          <p className="text-gray-700 mb-2">
                            {`${exp.startDate || 'No start date'} - ${exp.endDate || 'Present'}`}
                          </p>
                          <p className="text-gray-800">{exp.workSummery || 'No work summary'}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No work experience listed</p>
                  )}
                </div>

                {/* Education Section */}
                <div className='bg-white px-6 py-6'>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: mainColor }}>
                    Education
                  </h3>
                  {education.length > 0 ? (
                    education.map((edu) => (
                      <div key={edu.id} className="mb-6 p-4 border rounded-lg" style={{ borderColor: accentColor }}>
                        <h4 className="text-xl font-semibold mb-2" style={{ color: accentColor }}>
                          {edu.degree || 'No degree'}
                        </h4>
                        <p className="text-gray-700 mb-1">
                          {`${edu.universityName || 'No university'}, ${edu.startDate || 'No start date'} - ${edu.endDate || 'No end date'}`}
                        </p>
                        <p className="text-gray-800">{edu.description || 'No description'}</p>
                      </div>
                    ))
                  ) : (
                    <p>No education listed</p>
                  )}
                </div>
              </div>

              {/* Sidebar with Skills */}
              <div className="w-full md:w-1/3 pl-4">
                <div className="p-6 rounded-lg" style={{ backgroundColor: sectionColor }}>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: mainColor }}>
                    Skills
                  </h3>
                  {skills.length > 0 ? (
                    skills.map((skill) => (
                      <div key={skill.id} className="mb-4">
                        <div className="text-gray-700 mb-1">{skill.name}</div>
                        <div className="w-full bg-gray-300 rounded-full h-2">
                          <div
                            className="h-2 rounded-full"
                            style={{
                              width: `${skill.rating * 20}%`,
                              backgroundColor: mainColor,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-700">No skills listed</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Template24;
