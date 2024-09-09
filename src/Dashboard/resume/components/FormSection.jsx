import React from "react";
import PersonalDetails from "./forms/PersonalDetails";
import { Button } from "@/components/ui/button";
import { ArrowRight, LayoutGrid, ArrowLeft } from "lucide-react";
import { useState } from "react";
import Summery from "./forms/Summery";
import Experience from "./forms/Experience";

function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          size="sm"
          className="flex gap-2 border border-black"
        >
          <LayoutGrid />
          Theme
        </Button>
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button
              size="sm"
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              {" "}
              <ArrowLeft />{" "}
            </Button>
          )}

          <Button
            disabled={!enableNext}
            className="flex gap-2"
            size="sm"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            {" "}
            Next <ArrowRight />
          </Button>
        </div>
      </div>
      {activeFormIndex == 1 ? <PersonalDetails enabledNext={(v)=>setEnableNext(v)} /
      > : activeFormIndex==2?<Summery enabledNext={(v)=>setEnableNext(v)}/>: activeFormIndex==3?<Experience enabledNext={(v)=>setEnableNext(v)}/>:null}
    </div>
  );
}

export default FormSection;
