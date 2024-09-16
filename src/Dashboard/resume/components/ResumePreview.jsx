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
import Template15 from '@/Templates/Template15';
import Template16 from '@/Templates/Template16';
import Template17 from '@/Templates/Template17';
import Template18 from '@/Templates/Template18';
import Template19 from '@/Templates/Template19';
import Template20 from '@/Templates/Template20';
import Template21 from '@/Templates/Template21';
import Template22 from '@/Templates/Template22';
import Template23 from '@/Templates/Template23';
import Template24 from '@/Templates/template24';

function ResumePreview({ templateId }) {
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
  
                      case 15:
                      return <Template15/>;
                      case 16:
                      return <Template16/>;
                      case 17:
                      return <Template17/>;
                      case 18:
                        return <Template18/>;
                        case 19:
                        return <Template19/>;
                        case 20:
                        return <Template20/>;
                        case 21:
                        return <Template21/>;
                        case 22:
                        return <Template22/>;
                        case 23:
                        return <Template23/>;
                        case 24:
                        return <Template24/>;


      default:
        return <div>No template selected</div>;
    }
  };
console.log(templateId);
  return (
    <div className=' border rounded-lg shadow-md'>
      {renderTemplate()}
      
    </div>
  );
}

export default ResumePreview;
