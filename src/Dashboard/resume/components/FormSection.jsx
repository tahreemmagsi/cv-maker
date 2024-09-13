import React, { useState } from 'react';
import PersonalDetails from './forms/PersonalDetails';
import { Button } from '@/components/ui/button';
import { ArrowRight, LayoutGrid, ArrowLeft } from 'lucide-react';
import Summery from './forms/Summery';
import Experience from './forms/Experience';
import Education from './forms/Education';
import Skills from './forms/Skills';
import { Navigate, useParams } from 'react-router-dom';
import ThemeColor from './ThemeColor';

function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false);
  const { resumeID } = useParams();

  const handleNextClick = () => {
    setActiveFormIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevClick = () => {
    setActiveFormIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        {/* <Button
          variant="outline"
          size="sm"
          className="flex gap-2 border border-black"
        >
          <LayoutGrid />
          Theme
        </Button> */}
        <ThemeColor />
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button size="sm" onClick={handlePrevClick}>
              <ArrowLeft />
            </Button>
          )}

          <Button
            disabled={!enableNext}
            className="flex gap-2"
            size="sm"
            onClick={handleNextClick}
          >
            Next <ArrowRight />
          </Button>
        </div>
      </div>

      {activeFormIndex === 1 && <PersonalDetails enabledNext={(v) => setEnableNext(v)} />}
      {activeFormIndex === 2 && <Summery enabledNext={(v) => setEnableNext(v)} />}
      {activeFormIndex === 3 && <Experience enabledNext={(v) => setEnableNext(v)} />}
      {activeFormIndex === 4 && <Education enabledNext={(v) => setEnableNext(v)} />}
      {activeFormIndex === 5 && <Skills enabledNext={(v) => setEnableNext(v)} />}
      {activeFormIndex === 6 && <Navigate to={`/my-resume/${resumeID}/view`} />}
    </div>
  );
}

export default FormSection;
