import React from 'react';
import Template1 from '@/Templates/Template1';
import Template2 from '@/Templates/Template2';
import Template3 from '@/Templates/Template3';
import Template4 from '@/Templates/Template4';
import Template5 from '@/Templates/Template5';
import Template6 from '@/Templates/Template6';
import Template7 from '@/Templates/Template7';
import Template8 from '@/Templates/Template8';
import Template9 from '@/Templates/Template9';
import Template10 from '@/Templates/Template10';
import Template11 from '@/Templates/Template11';
import Template12 from '@/Templates/Template12';
import Template13 from '@/Templates/Template13';
import Template14 from '@/Templates/Template14';

function ResumePreview({ templateId }) {
  // Render different templates based on the templateId
  const renderTemplate = () => {
    switch (templateId) {
      case 1:
        return <Template1 />;
      case 2:
        return <Template2 />;
        case 3:
          return <Template3 />;
          case 4:
          return <Template4 />;
          case 5:
            return <Template5 />;
            case 6:
            return <Template6 />;

            case 7:
            return <Template7 />;
            case 8:
              return <Template8/>;
  
              case 9:
                return <Template9/>;
                case 10:
                  return <Template10/>;
                  case 11:
                  return <Template11/>;
                  case 12:
                  return <Template12/>;

                  case 13:
                    return <Template13/>;
                    case 14:
                      return <Template14/>;
  
  
      default:
        return <div>No template selected</div>;
    }
  };

  return (
    <div className=' border rounded-lg shadow-md'>
      {renderTemplate()}
    </div>
  );
}

export default ResumePreview;
