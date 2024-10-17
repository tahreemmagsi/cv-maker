import React, { useState, useEffect, useContext } from 'react';
import { Button } from '@/components/ui/button';
import { Brain, LoaderCircle } from 'lucide-react';
import { AIchatSession } from './../../../../service/AIModal';
import { toast } from 'sonner';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';

const PROMPT = 'position title: {positionTitle}, Depends on position title give me 2-3 lines paragraph for my experience in resume (Please do not add experience level and No JSON array)';

function RichTextEditor({ onRichTextEditorChange, index, defaultValue }) {
  const [value, setValue] = useState(defaultValue || '');
  const { resumeInfo } = useContext(ResumeinfoContext);
  const [loading, setLoading] = useState(false);

  // Update value if defaultValue changes
  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

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
      const cleanedResponse = resp.replace(/[\[\]]/g, ''); 

      setValue(cleanedResponse);
      onRichTextEditorChange({ target: { value: cleanedResponse } }); 
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
        <label className='text-xs'>Summary</label>
        <Button variant="outline" size="sm"
          onClick={GenerateSummeryFromAI}
          disabled={loading}
          className="flex gap-2 border-primary text-primary">
          {loading ?
            <LoaderCircle className='animate-spin' /> :
            <>
              <Brain className='h-4 w-4' /> Generate from AI
            </>
          }
        </Button>
      </div>
      <textarea
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onRichTextEditorChange(e); // Ensure parent state is updated
        }}
        className="w-full border rounded p-2"
        rows={5}
      />
    </div>
  );
}

export default RichTextEditor;
