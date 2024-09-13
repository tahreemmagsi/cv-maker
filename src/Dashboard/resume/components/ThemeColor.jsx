import React, { useContext, useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Button } from '@/components/ui/button'
import { LayoutGrid } from 'lucide-react'
import GlobalApi from './../../../../service/GlobalApi'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { ResumeinfoContext } from '@/context/ResumeinfoContext'

function ThemeColor() {
    const colors = [
        "#0A74DA", // Strong Blue
        "#FF6F61", // Coral
        "#4CAF50", // Green
        "#FFC107", // Amber
        "#00BCD4", // Cyan
        "#9C27B0", // Purple
        "#F44336", // Red
        "#3F51B5", // Indigo
        "#009688", // Teal
        "#E91E63", // Pink
        "#607D8B", // Blue Grey
        "#795548", // Brown
        "#8BC34A", // Light Green
        "#CDDC39", // Lime
        "#FFEB3B", // Yellow
        "#673AB7", // Deep Purple
        "#03A9F4", // Light Blue
        "#F48FB1", // Light Pink
        "#A5D6A7", // Light Green
        "#B3E5FC"  // Light Cyan
    ];
    
    const {resumeInfo,setResumeInfo}=useContext(ResumeinfoContext);
    const [selectedColor,setSelectedColor]=useState();
    const {resumeID}=useParams();
    const onColorSelect = (color) => {
        console.log('Selected color:', color);
        setSelectedColor(color);
        setResumeInfo({
          ...resumeInfo,
          themeColor: color
        });
        const data = {
          data: {
            themeColor: color
          }
        };
        GlobalApi.UpdateResumeDetail(resumeID, data)
          .then(resp => {
            console.log('API response:', resp); 
            toast('Theme Color Updated'); 
          })
          .catch(error => {
            console.error('Error updating theme color:', error);
            toast('Failed to update theme color', { variant: 'error' });
          });
      };
      
  return (
    <Popover>
  <PopoverTrigger asChild>
  <Button variant="outline" size="sm" 
          className="flex gap-2" > <LayoutGrid/> Theme</Button>
  </PopoverTrigger>
  <PopoverContent>
    <h2 className='mb-2 text-sm font-bold ml-6'>Select Theme Color</h2>
    <div className='grid grid-cols-5 gap-3 ml-6'>
        {colors.map((item,index)=>(
            <div 
            onClick={()=>onColorSelect(item)}
            className={`h-5 w-5 rounded-full cursor-pointer
             hover:border-black border
             ${selectedColor==item&&'border border-black'}
             `}
            style={{
                background:item
            }}>

            </div>
        ))}
    </div>
  </PopoverContent>
</Popover>
  )
}

export default ThemeColor