import { useContext } from 'react';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';

const Template18 = ({imageId}) => {
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
  const mainHeadingColor = themeColor || '#2d3a4a'; // Dark Blue
  const subHeadingColor = themeColor || '#f39c12'; // Orange

  return (
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="flex items-center p-8 bg-gradient-to-r from-gray-100 to-gray-300">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200">
            <img
              src={imageId ? `${imageBaseUrl}${imageId}` : image}           
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-6">
            <h1 className="text-4xl font-bold text-gray-900">
              {`${firstName || ''} ${lastName || ''}`}
            </h1>
            <h2 className="text-xl font-semibold mt-1 text-gray-700">
              {jobTitle || 'No Job Title'}
            </h2>
            <div className="mt-4 text-gray-600">
              <p>{address || 'No address provided'}</p>
              <p>{phone || 'No phone number provided'}</p>
              <p>{email || 'No email provided'}</p>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="p-8 border-t-4 border-t-gray-200 bg-white">
          <h3 className="text-2xl font-semibold mb-4" style={{ color: mainHeadingColor }}>
            Summary
          </h3>
          <p 
                    className="mt-2 text-gray-700" 
                    style={{ 
                      wordWrap: 'break-word', 
                      wordBreak: 'break-all', 
                      overflowWrap: 'break-word',
                      whiteSpace: 'normal'
                    }}>{summery || 'No summary provided'}</p>
        </div>

        {/* Skills Section */}
        <div className="p-8 border-t-4 border-t-gray-200 bg-white">
          <h3 className="text-2xl font-semibold mb-4" style={{ color: mainHeadingColor }}>
            Skills
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.length > 0 ? (
              skills.map((skill) => (
                <div key={skill.id} className="p-4 bg-gray-100 rounded-lg shadow-sm">
                  <h4 className="text-lg font-medium mb-2" style={{ color: subHeadingColor }}>
                    {skill.name}
                  </h4>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${skill.rating * 20}%`,
                        backgroundColor: subHeadingColor,
                      }}
                    ></div>
                  </div>
                </div>
              ))
            ) : (
              <p>No skills listed</p>
            )}
          </div>
        </div>

        {/* Experience Section */}
        <div className="p-8 border-t-4 border-t-gray-200 bg-white">
          <h3 className="text-2xl font-semibold mb-4" style={{ color: mainHeadingColor }}>
            Experience
          </h3>
          {experience.length > 0 ? (
            experience.map((exp) => (
              <div key={exp.id} className="mb-6 p-6 bg-gray-50 shadow-sm rounded-lg">
                <h4 className="text-xl font-semibold mb-2" style={{ color: subHeadingColor }}>
                  {exp.title || 'No title'}
                </h4>
                <p className="text-gray-600">
                  {`${exp.companyName || 'No company name'}, ${exp.city || 'No city'}, ${exp.state || 'No state'}`}
                </p>
                <p className="text-gray-600">
                  {`${exp.startDate || 'No start date'} - ${exp.endDate || 'Present'}`}
                </p>
                <p 
                    className="mt-2 text-gray-700" 
                    style={{ 
                      wordWrap: 'break-word', 
                      wordBreak: 'break-all', 
                      overflowWrap: 'break-word',
                      whiteSpace: 'normal'
                    }}>{exp.workSummery || 'No work summary'}</p>
              </div>
            ))
          ) : (
            <p>No work experience listed</p>
          )}
        </div>

        {/* Education Section */}
        <div className="p-8 border-t-4 border-t-gray-200 bg-white">
          <h3 className="text-2xl font-semibold mb-4" style={{ color: mainHeadingColor }}>
            Education
          </h3>
          {education.length > 0 ? (
            education.map((edu) => (
              <div key={edu.id} className="mb-6 p-6 bg-gray-50 shadow-sm rounded-lg">
                <h4 className="text-xl font-semibold mb-2" style={{ color: subHeadingColor }}>
                  {edu.degree || 'No degree'}
                </h4>
                <p className="text-gray-600">
                  {`${edu.universityName || 'No university'}, ${edu.startDate || 'No start date'} - ${edu.endDate || 'No end date'}`}
                </p>
                <p 
                    className="mt-2 text-gray-700" 
                    style={{ 
                      wordWrap: 'break-word', 
                      wordBreak: 'break-all', 
                      overflowWrap: 'break-word',
                      whiteSpace: 'normal'
                    }}>{edu.description || 'No description'}</p>
              </div>
            ))
          ) : (
            <p>No education listed</p>
          )}
        </div>
      </div>
  );
};

export default Template18;
