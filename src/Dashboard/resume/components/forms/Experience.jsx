import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useContext, useEffect, useState } from 'react'
import RichTextEditor from '../RichTextEditor'
import { ResumeinfoContext } from '@/context/ResumeinfoContext'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { LoaderCircle } from 'lucide-react'
import GlobalApi from './../../../../../service/GlobalApi'
const formFeild={
  title: '',
  companyName: '',
  city: '',
  state: '',
  startDate: '',
  endDate: '',
  workSummery: '',


}

function Experience() {
    const [experinceList, setExperinceList] = useState([formFeild]);
    const { resumeInfo, setResumeInfo } = useContext(ResumeinfoContext);
    const params = useParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (Array.isArray(resumeInfo?.experience) && resumeInfo.experience.length > 0) {
            setExperinceList(resumeInfo.experience);
        }
    }, []);

    const handleChange = (index, event) => {
        const newEntries = experinceList.slice();
        const { name, value } = event.target;
        newEntries[index][name] = value;
        setExperinceList(newEntries);
    };

    const AddNewExperience = () => {
        setExperinceList([...experinceList, formFeild])
    };

    const RemoveExperience = () => {
        setExperinceList(experinceList => experinceList.slice(0, -1));
    };

    const handleRichTextEditor = (e, name, index) => {
        const newEntries = experinceList.slice();
        newEntries[index][name] = e.target.value;
        setExperinceList(newEntries);
    };

    useEffect(() => {
        setResumeInfo({
            ...resumeInfo,
            experience: experinceList,
        });
    }, [experinceList,  setResumeInfo]);

    const onSave = () => {
        setLoading(true);
        const data = {
            data: {
                experience: experinceList.map(({ id, currentlyWorking, ...rest }) => rest)
            }
        };
    
        console.log('Sending data:', data);
    
        GlobalApi.UpdateResumeDetail(params?.resumeID, data)
            .then(res => {
                console.log('Response:', res);
                setLoading(false);
                toast('Details updated!');
            })
            .catch(error => {
                setLoading(false);
                console.error('Update failed:', error);  // Add more detailed logging
                toast('Server Error, Please try again!');
            });
    };
            return (
        <div>
        <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
        <h2 className='font-bold text-lg'>Professional Experience</h2>
        <p>Add Your previous Job experience</p>
        <div>
            {experinceList.map((item,index)=>(
                <div key={index}>
                    <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                        <div>
                            <label className='text-xs'>Position Title</label>
                            <Input name="title" 
                            onChange={(event)=>handleChange(index,event)}
                            defaultValue={item?.title}
                            />
                        </div>
                        <div>
                            <label className='text-xs'>Company Name</label>
                            <Input name="companyName" 
                            onChange={(event)=>handleChange(index,event)}
                            defaultValue={item?.companyName} />
                        </div>
                        <div>
                            <label className='text-xs'>City</label>
                            <Input name="city" 
                            onChange={(event)=>handleChange(index,event)} 
                            defaultValue={item?.city}/>
                        </div>
                        <div>
                            <label className='text-xs'>State</label>
                            <Input name="state" 
                            onChange={(event)=>handleChange(index,event)}
                            defaultValue={item?.state}
                             />
                        </div>
                        <div>
                            <label className='text-xs'>Start Date</label>
                            <Input type="date"  
                            name="startDate" 
                            onChange={(event)=>handleChange(index,event)} 
                            defaultValue={item?.startDate}/>
                        </div>
                        <div>
                            <label className='text-xs'>End Date</label>
                            <Input type="date" name="endDate" 
                            onChange={(event)=>handleChange(index,event)} 
                            defaultValue={item?.endDate}
                            />
                        </div>
                        <div className='col-span-2'>
                           {/* Work Summery  */}
                           <RichTextEditor
                           index={index}
                           defaultValue={item?.workSummery}
                           onRichTextEditorChange={(event)=>handleRichTextEditor(event,'workSummery',index)}  /> 
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className='flex justify-between'>
            <div className='flex gap-2'>
            <Button variant="outline" onClick={AddNewExperience} className="text-primary"> + Add More Experience</Button>
            <Button variant="outline" onClick={RemoveExperience} className="text-primary"> - Remove</Button>

            </div>
            <Button disabled={loading} onClick={()=>onSave()}>
            {loading?<LoaderCircle className='animate-spin' />:'Save'}    
            </Button>
        </div>
        </div>
    </div>
  )
}

export default Experience