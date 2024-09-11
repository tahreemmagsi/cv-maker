import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../images/collection.jpg';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import GlobalApi from './../../service/GlobalApi';
import { MoreVertical, Edit3, Eye, Download, Trash2, Loader2 } from 'lucide-react'; 
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from 'sonner';

function ResumeCarditems({ resume,refreshData }) {
  const navigate = useNavigate();
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const onDelete=()=>{
    setLoading(true);
    GlobalApi.DeleteResumeById(resume.documentId).then(resp=>{
      console.log(resp);
      toast('Resume Deleted!');
      refreshData()
      setLoading(false);
      setOpenAlert(false);
    },(error)=>{
      setLoading(false);
    })
  }


  return (
    <div className='relative h-[280px] w-[280px] mt-4 border rounded-lg overflow-hidden 
        hover:scale-105 transition-all hover:shadow-md shadow-primary'>
      <img 
        src={img1} 
        alt="Resume Placeholder" 
        className='absolute top-0 left-0 w-full h-full object-cover' 
      />    

      <div className='absolute bottom-0 left-0 w-full h-full flex items-end'>
        <div className='w-full bg-primary text-white flex justify-between items-center px-2 py-1'>
          <span>{resume.title}</span>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreVertical className='h-4 w-4 cursor-pointer' />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate('/dashboard/resume/' + resume.documentId + "/edit")} className="flex justify-between items-center">
                <span>Edit</span> <Edit3 className='ml-2 h-4 w-4' />
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/my-resume/' + resume.documentId + "/view")} className="flex justify-between items-center">
                <span>View</span> <Eye className='ml-2 h-4 w-4' />
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/my-resume/' + resume.documentId + "/view")} className="flex justify-between items-center">
                <span>Download</span> <Download className='ml-2 h-4 w-4' />
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setOpenAlert(true)}
                className='flex justify-between items-center text-red-500'>
                <span>Delete</span> <Trash2 className='ml-2 h-4 w-4' />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <AlertDialog open={openAlert} onOpenChange={setOpenAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your resume
              and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpenAlert(false)}>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              disabled={loading}
              onClick= {onDelete}>
              {loading ? <Loader2 className='animate-spin h-4 w-4' /> : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default ResumeCarditems;
