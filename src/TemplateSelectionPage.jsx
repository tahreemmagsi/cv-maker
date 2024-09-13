import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import GlobalApi from './../service/GlobalApi';
import { toast } from 'sonner';
import temp1 from './images/template1.png';
import temp2 from './images/template2.png';
import temp3 from './images/template3.png';
import temp4 from './images/template4.png';
import temp5 from './images/template5.png';
import temp6 from './images/template6.png';

function TemplateSelectionPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { resumeID } = useParams();  

  const handleTemplateSelect = async (templateId) => {
    if (!resumeID) {
      console.error('Resume ID is undefined.');
      toast('Failed to save template: Resume ID is missing', { variant: 'error' });
      return;
    }
  
    const data = { data: { template: templateId } };
  
    try {
      console.log('Sending request to update resume with ID:', resumeID);
      console.log('Request data:', data);
      const response = await GlobalApi.UpdateResumeDetail(resumeID, data);
  
      console.log('Response from API:', response);
  
      if (response.status === 200) { // Check if response status is OK
        navigate(`/dashboard/resume/${resumeID}/new`, {
          state: { data: 'new', templateId },
        });
        toast('Template selected and saved successfully!');
      } else {
        console.error('Error response from API:', response);
        toast(`Failed to save template: ${response.data.message || 'Unknown error'}`, { variant: 'error' });
      }
    } catch (error) {
      console.error('Error saving template:', error);
      toast('Failed to save template: Please try again later.', { variant: 'error' });
    }
  };
      return (
    <div className="p-6">
      <h2 className="text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text ">
        Select a Template
      </h2>
      <div className="grid grid-cols-4 gap-6">
        {/* Template 1 */}
        <div
          className="border  shadow-md rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(1)}
        >
          <img
            src={temp1}
            alt="Template 1"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Template 2 */}
        <div
          className=" shadow-md rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(2)}
        >
          <img
            src={temp2}
            alt="Template 2"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
                <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(3)}
        >
          <img
            src={temp3}
            alt="Template 3"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(4)}
        >
          <img
            src={temp4}
            alt="Template 4"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(5)}
        >
          <img
            src={temp5}
            alt="Template 5"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(6)}
        >
          <img
            src={temp6}
            alt="Template 6"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(7)}
        >
          <img
            // src={temp3}
            alt="Template 7"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(8)}
        >
          <img
            // src={temp3}
            alt="Template 8"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(9)}
        >
          <img
            // src={temp3}
            alt="Template 9"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(10)}
        >
          <img
            // src={temp3}
            alt="Template 10"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(11)}
        >
          <img
            // src={temp3}
            alt="Template 11"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(12)}
        >
          <img
            // src={temp3}
            alt="Template 12"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(13)}
        >
          <img
            // src={temp3}
            alt="Template 13"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(14)}
        >
          <img
            // src={temp3}
            alt="Template 14"
            className="w-full h-full object-cover rounded-md"
          />
        </div>


      </div>
    </div>
  );
}

export default TemplateSelectionPage;
