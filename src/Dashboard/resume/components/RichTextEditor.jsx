import { Button } from '@/components/ui/button';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';
import { Brain, LoaderCircle } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { BtnBold, BtnBulletList, BtnClearFormatting, BtnItalic, BtnLink, BtnNumberedList, BtnStrikeThrough, BtnStyles, BtnUnderline, Editor, EditorProvider, HtmlButton, Separator, Toolbar } from 'react-simple-wysiwyg';
import { AIchatSession } from './../../../../service/AIModal';
import { toast } from 'sonner';

const PROMPT='position titile: {positionTitle} , Depends on position title give me 5-7 bullet points for my experience in resume (Please do not add experince level and No JSON array) , give me result in HTML tags'
function RichTextEditor({onRichTextEditorChange,index,defaultValue}) {
    const [value,setValue]=useState(defaultValue);
    const {resumeInfo,setResumeInfo}=useContext(ResumeinfoContext)
    const [loading, setLoading] = useState(false);

    const GenerateSummeryFromAI = async () => {
        const experienceEntry = resumeInfo?.experience?.[index];
      
        if (!experienceEntry?.title) {
          toast(!resumeInfo?.experience ? 'Experience data is not available.' : 'Please Add Position Title');
          return;
        }
      
        setLoading(true);
        try {
          const prompt = PROMPT.replace('{positionTitle}', experienceEntry.title);
          const result = await AIchatSession.sendMessage(prompt);
          const resp = await result.response.text();
          setValue(resp.replace(/[\[\]]/g, '')); // Removes [ and ] from response
        } catch (error) {
          console.error("Error generating summary from AI:", error);
          toast('Failed to generate summary. Please try again.');
        } finally {
          setLoading(false);
        }
      };
              
    return (
    <div>
      <div className='flex justify-between my-2'>
        <label className='text-xs'>Summery</label>
        <Button variant="outline" size="sm" 
        onClick={GenerateSummeryFromAI}
        disabled={loading}
        className="flex gap-2 border-primary text-primary">
          {loading?
          <LoaderCircle className='animate-spin'/>:  
          <>
           <Brain className='h-4 w-4'/> Generate from AI 
           </>
        }
         </Button>
      </div>
    <EditorProvider>
      <Editor value={value} onChange={(e)=>{
        setValue(e.target.value);
        onRichTextEditorChange(e)
      }}>
         <Toolbar>
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnStrikeThrough />
          <Separator />
          <BtnNumberedList />
          <BtnBulletList />
          <Separator />
          <BtnLink />
         
         
        </Toolbar>
      </Editor>
      </EditorProvider>
    </div>
  )
}

export default RichTextEditor