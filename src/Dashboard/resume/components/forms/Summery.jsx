import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import GlobalApi from "./../../../../../service/GlobalApi";
import { ResumeinfoContext } from "@/context/ResumeinfoContext";
import { AIchatSession } from "./../../../../../service/AIModal";
import { FaRobot } from "react-icons/fa";

const prompt = "Job Title: {jobTitle}. Provide a summary for 3 experience levels (Mid Level, Senior Level, and Fresher) in plain JSON format without any markdown or additional formatting. Include fields: 'summary' and 'experience_level'.";

function Summery({ enabledNext }) {
    const { resumeInfo, setResumeInfo } = useContext(ResumeinfoContext);
    const [summery, setSummery] = useState(""); 
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const [aiGeneratedSummeryList, setAiGenerateSummeryList] = useState([]);

    // Filter out dummy text like "Lorem ipsum"
    const isValidSummery = (text) => text && !text.toLowerCase().includes("lorem ipsum");

    useEffect(() => {
        if (resumeInfo?.summery && summery === "" && isValidSummery(resumeInfo.summery)) {
            setSummery(resumeInfo.summery);
        }
    }, [resumeInfo, summery]);

    useEffect(() => {
        setResumeInfo((prevInfo) => ({
            ...prevInfo,
            summery: summery,
        }));
    }, [summery, setResumeInfo]);

    const GenerateSummeryFromAI = async () => {
        setLoading(true);
        const PROMPT = prompt.replace('{jobTitle}', resumeInfo?.jobTitle || "");
        console.log("Prompt sent to AI:", PROMPT);
    
        try {
            const result = await AIchatSession.sendMessage(PROMPT);
            const responseText = await result.response.text();
            console.log("Raw AI Response:", responseText);
    
            // Remove any unnecessary formatting
            const cleanedResponse = responseText.replace(/```json|```/g, '');
            const parsedResponse = JSON.parse(cleanedResponse);
            console.log("Parsed AI Response:", parsedResponse);
    
            // Check if the response contains the expected structure
            if (parsedResponse.experience_levels && Array.isArray(parsedResponse.experience_levels)) {
                setAiGenerateSummeryList(parsedResponse.experience_levels); // Extract the array
            } else {
                console.error("Parsed response does not contain 'experience_levels':", parsedResponse);
                toast.error("Unexpected response format from AI. Please try again.");
            }
        } catch (error) {
            console.error("Error processing AI response:", error);
            toast.error("Failed to generate summary from AI. Please try again.");
        } finally {
            setLoading(false);
        }
    };
    
    const onSave = (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            data: { summery: summery }
        };
        GlobalApi.UpdateResumeDetail(params?.resumeID, data).then(resp => {
            console.log(resp);
            enabledNext(true);
            setLoading(false);
            toast("Details updated");
        }, (error) => {
            setLoading(false);
            toast.error("Failed to save details. Please try again.");
        });
    };

    return (
        <div>
            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
                <h2 className='font-bold text-lg'>Summery</h2>
                <p>Add Summery for your job title</p>

                <form className='mt-7' onSubmit={onSave}>
                    <div className='flex justify-between items-end'>
                        <label>Add Summery</label>
                        <button
                            variant="outline"
                            onClick={GenerateSummeryFromAI}
                            type="button"
                            size="sm"
                            className="border border-purple-700 text-purple-700 flex gap-2 items-center rounded-md transition duration-200 transform hover:bg-purple-600 hover:text-white hover:scale-105 py-2 px-4"
                        >
                            <FaRobot className="h-4 w-4" /> Generate from AI
                        </button>
                    </div>
                    <Textarea className="mt-5" required
                        value={isValidSummery(summery) ? summery : ""} // Ensure valid summary is shown
                        onChange={(e) => {
                            setSummery(e.target.value);
                            enabledNext(false); // Disable next button on change
                        }}
                    />
                    <div className='mt-2 flex justify-end'>
                        <Button type="submit" disabled={loading}>
                            {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
                        </Button>
                    </div>
                </form>
            </div>

            {Array.isArray(aiGeneratedSummeryList) && aiGeneratedSummeryList.map((item, index) => (
                <div key={index}
                    onClick={() => setSummery(item?.summary)}
                    className='p-5 shadow-lg my-4 rounded-lg cursor-pointer'>
                    <h2 className='font-bold my-1 text-primary'>Level: {item?.experience_level}</h2>
                    <p>{item?.summary}</p>
                </div>
            ))}
        </div>
    );
}

export default Summery;
