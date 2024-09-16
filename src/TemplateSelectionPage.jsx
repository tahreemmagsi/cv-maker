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
import temp7 from './images/template7.PNG'
import temp8 from './images/template8.png';
import temp9 from './images/template9.png';
import temp10 from './images/template10.png';
import temp11 from './images/template11.PNG';
import temp12 from './images/template12.png';
import temp13 from './images/template13.png';
import temp14 from './images/template14.png';
import temp24 from './images/template24.png';
import temp23 from './images/template23.png';
import temp22 from './images/template22.png';
import temp21 from './images/template21.png';
import temp20 from './images/template20.png';
import temp19 from './images/template19.png';
import temp18 from './images/template18.png';
import temp17 from './images/template17.png';
import temp16 from './images/template16.png';
import temp15 from './images/template15.png';


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
            src={temp7}
            alt="Template 7"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(8)}
        >
          <img
            src={temp8}
            alt="Template 8"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(9)}
        >
          <img
            src={temp9}
            alt="Template 9"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(10)}
        >
          <img
            src={temp10}
            alt="Template 10"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(11)}
        >
          <img
            src={temp11}
            alt="Template 11"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(12)}
        >
          <img
            src={temp12}
            alt="Template 12"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(13)}
        >
          <img
            src={temp13}
            alt="Template 13"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(14)}
        >
          <img
            src={temp14}
            alt="Template 14"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(15)}
        >
          <img
            src={temp15}
            alt="Template 15"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(16)}
        >
          <img
            src={temp16}
            alt="Template 16"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(17)}
        >
          <img
            src={temp17}
            alt="Template 17"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(18)}
        >
          <img
            src={temp18}
            alt="Template 18"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(19)}
        >
          <img
            src={temp19}
            alt="Template 19"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(20)}
        >
          <img
            src={temp20}
            alt="Template 20"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(21)}
        >
          <img
            src={temp21}
            alt="Template 21"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(22)}
        >
          <img
            src={temp22}
            alt="Template 22"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(23)}
        >
          <img
            src={temp23}
            alt="Template 23"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div
          className=" rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer w-80 h-[30rem] flex items-center justify-center"
          onClick={() => handleTemplateSelect(24)}
        >
          <img
            src={temp24}
            alt="Template 24"
            className="w-full h-full object-cover rounded-md"
          />
        </div>




      </div>
    </div>
  );
}

export default TemplateSelectionPage;
