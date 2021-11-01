import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () =>
  toast.success(' Congratulations, you have successfully registered!', {
    position: 'top-right',
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export default notify;
