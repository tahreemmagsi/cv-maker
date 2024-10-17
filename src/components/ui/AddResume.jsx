import  { useState } from 'react';
import { Loader2, PlusSquare } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './button';
import { Input } from './input';
import GlobalApi from './../../../service/GlobalApi';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

function AddResume() {
  const [resumeTitle, setResumeTitle] = useState('');
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const onCreate = async () => {
    setLoading(true);
    setErrorMessage(''); // Clear previous errors

    const uuid = uuidv4();
    const data = {
      data: {
        title: resumeTitle,
        resumeID: uuid,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
      },
    };

    try {
      const resp = await GlobalApi.CreateNewResume(data);
      console.log(resp);
      // Navigate to the edit page with the new resume ID
      // navigate(`/dashboard/resume/${resp.data.data.documentId}/edit`);
      // navigate(`/dashboard/resume/${resp.data.data.documentId}/new`,{ state: { data: 'new' } });
      navigate(`/dashboard/resume/${resp.data.data.documentId}/template-selection`, { state: { resumeData: data } });


    } catch (error) {
      console.error('Error creating resume:', error);
      setErrorMessage('Failed to create resume. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
        <DialogTrigger asChild>

    <div className='p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] w-[280px] hover:scale-105
     transition-all hover:shadow-md cursor-pointer mt-4'>
          <PlusSquare />
          </div>

        </DialogTrigger>
        <DialogContent className='sm:max-w-md'>
          <DialogHeader>
            <DialogTitle>Create new Resume</DialogTitle>
            <DialogDescription>Add a title for your Resume</DialogDescription>
          </DialogHeader>
          <div className='flex items-center space-x-2'>
            <div className='grid flex-1 gap-2'>
              <Input
                placeholder='Write the title'
                onChange={(e) => setResumeTitle(e.target.value)}
                value={resumeTitle}
              />
              {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
            </div>
          </div>
          <DialogFooter className='sm:justify-end'>
            <DialogClose asChild>
              <Button type='button' variant='secondary'>
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={!resumeTitle || loading} onClick={onCreate}>
              {loading ? <Loader2 className='animate-spin' /> : "Create"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
  );
}

export default AddResume;
