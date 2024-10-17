import { useContext, useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResumeinfoContext } from "@/context/ResumeinfoContext";
import GlobalApi from "./../../../../../service/GlobalApi";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

function PersonalDetail({ enabledNext, templateId, setImageId }) {
  const params = useParams();
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;


  const { resumeInfo, setResumeInfo } = useContext(ResumeinfoContext);
  console.log(resumeInfo,'hhhhh');
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    address: "",
    phone: "",
    email: "",
    image: null,
  });
  
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const isDummyData = resumeInfo?.phone === "(000)-000-0000"; 
    if (resumeInfo && !isDummyData) {
      setFormData({
        firstName: resumeInfo?.firstName || "",
        lastName: resumeInfo?.lastName || "",
        jobTitle: resumeInfo?.jobTitle || "",
        address: resumeInfo?.address || "",
        phone: resumeInfo?.phone || "",
        email: resumeInfo?.email || "",
        image: resumeInfo?.image || null,
      });
    }
  }, [resumeInfo]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (formData[name] !== value) {
      enabledNext(false);
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      setResumeInfo((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
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
      setImageId(uploadResponse.data[0].url);
      return uploadResponse.data[0].id;
    } catch (error) {
      console.error(
        "Image upload failed:",
        error.response ? error.response.data : error.message
      );
      throw new Error("Image upload failed");
    }
  };

  const onSave = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      let imageId = null;
      console.log("Form Data:", formData);

  
      if (formData.image && !formData.image?.id) {
        const imageFile = await fetch(formData.image)
          .then((res) => res.blob())
          .then(
            (blob) =>
              new File([blob], "uploaded_image", { type: "image/jpeg" })
          );
        imageId = await uploadImage(imageFile);
      } else if (formData.image && formData.image === "/src/images/profilepic.PNG") {

        imageId = null;
      } else {
        imageId = null; 
      }
  
      const data = {
        data: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          jobTitle: formData.jobTitle,
          address: formData.address,
          phone: formData.phone,
          email: formData.email,
          ...(imageId && {image: imageId})
        },
      };
  
      console.log("Data being sent to API:", data);
  
      const response = await GlobalApi.UpdateResumeDetail(params?.resumeID, data);
      console.log(response);
      enabledNext(true);
      toast("Details updated");
    } catch (error) {
      console.error("Error saving details:", error.message);
      toast.error("Error saving details");
    } finally {
      setLoading(false);
    }
  };

    
  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Personal Detail</h2>
      <p>Get Started with the basic information</p>
      <form onSubmit={onSave}>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div>
            <label className="text-sm">First Name</label>
            <Input
              name="firstName"
              defaultValue={formData?.firstName } // Show empty if no first name
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Last Name</label>
            <Input
              name="lastName"
              required
              onChange={handleInputChange}
              value={formData?.lastName}
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Job Title</label>
            <Input
              name="jobTitle"
              required
              value={formData?.jobTitle}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Address</label>
            <Input
              name="address"
              required
              value={formData?.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Phone</label>
            <Input
              name="phone"
              required
              value={formData?.phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <Input
              name="email"
              required
              value={formData?.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="justify-between">
            {templateId >= 15 && templateId <= 24 && (
              <div className="col-span-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  aria-label="Upload image"
                />
                <Button
                type="button"
                  onClick={() => fileInputRef.current.click()}
                  style={{ backgroundColor: "black", color: "white" }}
                  className="px-4 py-2 mt-2"
                >
                  Upload Image
                </Button>
                {/* {formData.image && (
                  <img src={formData.image} alt="Preview" className="mt-2 h-24" />
                )} */}


              </div>
            )}
          </div>
          <div className="mt-3 flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetail;
