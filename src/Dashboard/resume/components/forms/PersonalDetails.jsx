import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResumeinfoContext } from "@/context/ResumeinfoContext";
import GlobalApi from "./../../../../../service/GlobalApi";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { useRef } from "react";


function PersonalDetail({ enabledNext, templateId, setImageId }) {
  const params = useParams();
  const { resumeInfo, setResumeInfo } = useContext(ResumeinfoContext);
  const [formData, setFormData] = useState({
    firstName: resumeInfo?.firstName || "",
    lastName: resumeInfo?.lastName || "",
    jobTitle: resumeInfo?.jobTitle || "",
    address: resumeInfo?.address || "",
    phone: resumeInfo?.phone || "",
    email: resumeInfo?.email || "",
    image: resumeInfo?.image || null,
  });
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);


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

  const uploadImage = async (file) => {
    const formDataForImage = new FormData();
    formDataForImage.append("files", file);
    try {
      const uploadResponse = await axios.post(
        "http://localhost:1337/api/upload",
        formDataForImage
      );
      setImageId(uploadResponse.data[0].url)
      return uploadResponse.data[0].id; 
    } catch (error) {
      console.error("Image upload failed:", error.response ? error.response.data : error.message);
      throw new Error("Image upload failed"); 
    }
  };

  const onSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let imageId;
  
      if (formData.image && formData.image.startsWith('data:image/')) {
        const imageFile = await fetch(formData.image)
          .then(res => res.blob())
          .then(blob => new File([blob], "uploaded_image", { type: "image/jpeg" })); 
        imageId = await uploadImage(imageFile); 
      }
  
      const data = {
        data: {
          ...formData,
          image: imageId || formData.image, 
        },
      };
  console.log("Data being sent to API:", data);

      const response = await GlobalApi.UpdateResumeDetail(params?.resumeID, data);
      console.log(response);
      enabledNext(true);
      toast("Details updated");
    } catch (error) {
      console.error("Error saving details:", error.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
      <h2 className='font-bold text-lg'>Personal Detail</h2>
      <p>Get Started with the basic information</p>
      <form onSubmit={onSave}>
        <div className='grid grid-cols-2 mt-5 gap-3'>
          <div>
            <label className='text-sm'>First Name</label>
            <Input name="firstName" defaultValue={resumeInfo?.firstName} required onChange={handleInputChange} />
          </div>
          <div>
            <label className='text-sm'>Last Name</label>
            <Input name="lastName" required onChange={handleInputChange} defaultValue={resumeInfo?.lastName} />
          </div>
          <div className='col-span-2'>
            <label className='text-sm'>Job Title</label>
            <Input name="jobTitle" required defaultValue={resumeInfo?.jobTitle} onChange={handleInputChange} />
          </div>
          <div className='col-span-2'>
            <label className='text-sm'>Address</label>
            <Input name="address" required defaultValue={resumeInfo?.address} onChange={handleInputChange} />
          </div>
          <div>
            <label className='text-sm'>Phone</label>
            <Input name="phone" required defaultValue={resumeInfo?.phone} onChange={handleInputChange} />
          </div>
          <div>
            <label className='text-sm'>Email</label>
            <Input name="email" required defaultValue={resumeInfo?.email} onChange={handleInputChange} />
          </div><div className="justify-between">
          {templateId >= 15 && templateId <= 24 && (
  <div className="col-span-2">
    <input
      type="file"
      accept="image/*"
      onChange={handleImageUpload}
      style={{ display: 'none' }}
      ref={fileInputRef} // Add a ref to trigger click event
      aria-label="Upload image"
    />
    
    <Button 
      onClick={() => fileInputRef.current.click()} // Trigger file input click
      style={{ backgroundColor: 'black', color: 'white' }} // Black button styling
      className="px-4 py-2 mt-2"
    >
      Upload Image
    </Button>

    {formData.image && (
      <img src={formData.image} alt="Preview" className="mt-2 h-24" />
    )}
  </div>
)}
        </div>
        <div className='mt-3 flex justify-end'>
          <Button type="submit" disabled={loading}>
            {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
          </Button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetail;
