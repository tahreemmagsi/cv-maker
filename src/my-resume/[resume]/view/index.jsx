import Header from '@/components/ui/custom/header';
import { Button } from '@/components/ui/button';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';
import ResumePreview from '@/Dashboard/resume/components/ResumePreview';
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlobalApi from './../../../../service/GlobalApi';
import { RWebShare } from 'react-web-share';
import html2canvas from 'html2canvas';
import html2pdf from 'html2pdf.js';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function ViewResume() {
  const [resumeInfo, setResumeInfo] = useState(null);
  const { resumeID } = useParams();
  const [templateId, setTemplateId] = useState(null);
  const [format, setFormat] = useState('pdf'); 
  const navigate=useNavigate()

  useEffect(() => {
    GetResumeInfo();
  }, []);

  const GetResumeInfo = async () => {
    try {
      const resp = await GlobalApi.GetResumeById(resumeID);
      console.log(resp.data.data);
      setResumeInfo(resp.data.data);

      const templateId = Number(resp.data.data.template);
      setTemplateId(templateId);

    } catch (error) {
      console.error('Failed to fetch resume info:', error);
    }
  };

  const HandleDownload = async () => {
    const printArea = document.getElementById('print-area');
    if (printArea) {
      try {
        const options = {
          margin: [0, 0, 0, 0], // Set margins to 0 for full page coverage
          filename: 'resume.pdf',
          image: { type: 'jpeg', quality: 1.0 },
          html2canvas: {
            scale: 4, // Higher scale improves quality
            useCORS: true, // Enables cross-origin images
            logging: true, // Enables console logging
          },
          jsPDF: {
            unit: 'pt', // Use points as the unit
            format: 'a4', // A4 format
            orientation: 'portrait', // Portrait orientation
          },
        };
  
        if (format === 'pdf') {
          await html2pdf().from(printArea).set(options).save();
        } else {
          // Convert the element to canvas and download as image format
          const canvas = await html2canvas(printArea, { scale: 2, useCORS: true });
          const imgData = canvas.toDataURL(`image/${format}`);
          const link = document.createElement('a');
          link.href = imgData;
          link.download = `resume.${format}`;
          link.click();
        }
      } catch (error) {
        console.error('Error generating file:', error);
      }
    }
  };
  
  return (
    <ResumeinfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div id="no-print">
        <Header />
        <Button className="ml-10 mt-10 text-xl" onClick={() => navigate('/dashboard/resume/' + resumeInfo.documentId + "/edit")}>  <ArrowLeft />
        Go for Edit</Button>
        <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
          <h2 className='text-center text-2xl font-medium'>
            Congrats! Your Resume is ready!
          </h2>
          <p className='text-center text-gray-400'>
            Now you are ready to download your resume and you can share unique
            resume URL with your friends and family
          </p>
          <div className='flex flex-col justify-center items-center gap-4 md:flex-row md:gap-6 px-44 my-10'>
            Select Format :
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className='p-2 border border-gray-300 rounded'
            >
              <option className='p-4' value="pdf">PDF</option>
              <option className='p-4' value="png">PNG</option>
              <option value="jpeg">JPEG</option>
            </select>
            <Button onClick={HandleDownload}>Download</Button>
            <RWebShare
              data={{
                text: "Hello Everyone, This is my resume please open URL to see it",
                url: import.meta.env.VITE_BASE_URL + "/my-resume/" + resumeID + "/view",
                title: resumeInfo?.firstName + " " + resumeInfo?.lastName + " resume",
              }}
              onClick={() => console.log("Shared successfully!")}
            >
              <Button>Share</Button>
            </RWebShare>
          </div>
        </div>
      </div>
      <div className='md:mx-20 lg:mx-36'>
        <div id="print-area" className='max-w-3xl mx-auto'>
          {/* <ResumePreview templateId={templateId} imageId={`http://localhost:1337${resumeInfo?.image?.url}`} /> */}
          <ResumePreview templateId={templateId} imageId={`${resumeInfo?.image?.url}`} />


        </div>
      </div>
    </ResumeinfoContext.Provider>
  );
}

export default ViewResume;
