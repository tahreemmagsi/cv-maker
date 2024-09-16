import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResumeinfoContext } from "@/context/ResumeinfoContext";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "./../../../../../service/GlobalApi";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";

function PersonalDetail({ enabledNext, templateId }) {  
  const params = useParams();
  const { resumeInfo, setResumeInfo } = useContext(ResumeinfoContext);

  const [formData, setFormData] = useState({
    firstName: resumeInfo?.firstName || "",
    lastName: resumeInfo?.lastName || "",
    jobTitle: resumeInfo?.jobTitle || "",
    address: resumeInfo?.address || "",
    phone: resumeInfo?.phone || "",
    email: resumeInfo?.email || "",
    image: resumeInfo?.image || "",  
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    enabledNext(false);
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setResumeInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          image: reader.result, 
        }));

        setResumeInfo((prev) => ({
          ...prev,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      data: formData,
    };
    GlobalApi.UpdateResumeDetail(params?.resumeID, data).then(
      (resp) => {
        console.log(resp);
        enabledNext(true);
        setLoading(false);
        toast("Details updated");
      },
      (error) => {
        setLoading(false);
      }
    );
  };

  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
        <h2 className='font-bold text-lg'>Personal Detail</h2>
        <p>Get Started with the basic information</p>

        <form onSubmit={onSave}>
            <div className='grid grid-cols-2 mt-5 gap-3'>
                <div>
                    <label className='text-sm'>First Name</label>
                    <Input name="firstName" defaultValue={resumeInfo?.firstName} required onChange={handleInputChange}  />
                </div>
                <div>
                    <label className='text-sm'>Last Name</label>
                    <Input name="lastName" required onChange={handleInputChange} 
                    defaultValue={resumeInfo?.lastName} />
                </div>
                <div className='col-span-2'>
                    <label className='text-sm'>Job Title</label>
                    <Input name="jobTitle" required 
                    defaultValue={resumeInfo?.jobTitle}
                    onChange={handleInputChange}  />
                </div>
                <div className='col-span-2'>
                    <label className='text-sm'>Address</label>
                    <Input name="address" required 
                    defaultValue={resumeInfo?.address}
                    onChange={handleInputChange}  />
                </div>
                <div>
                    <label className='text-sm'>Phone</label>
                    <Input name="phone" required 
                    defaultValue={resumeInfo?.phone}
                    onChange={handleInputChange}  />
                </div>
                <div>
                    <label className='text-sm'>Email</label>
                    <Input name="email" required 
                    defaultValue={resumeInfo?.email}
                    onChange={handleInputChange}  />
                </div>

                {templateId >= 15 && templateId <= 24 && (  // Conditionally render the image upload button
                  <div className="col-span-2">
                    <input type="file" accept="image/*" onChange={handleImageUpload} />
                    {formData.image && <img src={formData.image} alt="Preview" className="mt-2 h-24" />}  {/* Show preview */}
                  </div>
                )}
            </div>
            <div className='mt-3 flex justify-end'>
                <Button type="submit" disabled={loading}>
                    {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
                </Button>
            </div>
        </form>
    </div>
  );
}

export default PersonalDetail;
