import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { FaRobot } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { useState,useEffect } from "react";
import GlobalApi from "./../../../../../service/GlobalApi";
import { ResumeinfoContext } from "@/context/ResumeinfoContext";
import { useContext } from "react";
import { AIchatSession } from "./../../../../../service/AIModal";
import { Brain } from "lucide-react";

const prompt = "Job Title: {jobTitle}. Provide a summary for 3 experience levels (Mid Level, Senior Level, and Fresher) in plain JSON format without any markdown or additional formatting. Include fields: 'summary' and 'experience_level'.";
function Summery({enabledNext}) {
    const {resumeInfo,setResumeInfo}=useContext(ResumeinfoContext);
    const [summery,setSummery]=useState();
    const [loading,setLoading]=useState(false);
    const params=useParams();
    const [aiGeneratedSummeryList,setAiGenerateSummeryList]=useState();
    useEffect(()=>{
        summery&&setResumeInfo({
            ...resumeInfo,
            summery:summery
        })
    },[summery])

    const GenerateSummeryFromAI = async () => {
        setLoading(true);
        const PROMPT = prompt.replace('{jobTitle}', resumeInfo?.jobTitle);
        console.log("Prompt sent to AI:", PROMPT);
    
        try {
            const result = await AIchatSession.sendMessage(PROMPT);
            const responseText = await result.response.text();
    
            console.log("Raw response from AI:", responseText);
    
            const parsedResponse = JSON.parse(responseText.replace(/```json|```/g, ''));
            setAiGenerateSummeryList(parsedResponse);
        } catch (error) {
            console.error("Error processing AI response:", error);
            toast.error("Failed to generate summary from AI. Please try again.");
        } finally {
            setLoading(false);
        }
    };
        const onSave=(e)=>{
        e.preventDefault();
       
        setLoading(true)
        const data={
            data:{
                summery:summery
            }
        }
        GlobalApi.UpdateResumeDetail(params?.resumeID,data).then(resp=>{
            console.log(resp);
            enabledNext(true);
            setLoading(false);
            toast("Details updated")
        },(error)=>{
            setLoading(false);
        })
    }
    return (
    <div>
         <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
        <h2 className='font-bold text-lg'>Summery</h2>
        <p>Add Summery for your job title</p>

        <form className='mt-7' onSubmit={onSave}>
            <div className='flex justify-between items-end'>
                <label>Add Summery</label>
                <button variant="outline" onClick={()=>GenerateSummeryFromAI()} 
                type="button" size="sm" className="border-primary text-primary flex gap-2"> 
                <Brain className='h-4 w-4' />  Generate from AI</button>
            </div>
            <Textarea className="mt-5" required
            value={summery}
                defaultValue={summery?summery:resumeInfo?.summery}
            onChange={(e)=>setSummery(e.target.value)}
            />
            <div className='mt-2 flex justify-end'>
            <Button type="submit"
                disabled={loading}>
                    {loading?<LoaderCircle className='animate-spin' />:'Save'}
                    </Button>
            </div>
        </form>
        </div>

        
       {aiGeneratedSummeryList&& <div className='my-5'>
            <h2 className='font-bold text-lg'>Suggestions</h2>
            {aiGeneratedSummeryList?.map((item,index)=>(
                <div key={index} 
                onClick={()=>setSummery(item?.summary)}
                className='p-5 shadow-lg my-4 rounded-lg cursor-pointer'>
                    <h2 className='font-bold my-1 text-primary'>Level: {item?.experience_level}</h2>
                    <p>{item?.summary}</p>
                </div>
            ))}
        </div>}

    </div>
  )
}

export default Summery