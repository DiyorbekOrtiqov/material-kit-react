// eslint-disable-next-line import/no-unresolved
import { toast } from 'react-toastify';

const notifySuccess = (text) => {
  toast(text, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: { background: 'green', color: 'white' },
  });
};
const notifyError = (text) => {
  toast(text, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
    style: { background: 'white', color: 'black', border: '2px solid: red' },
  });
};

export { notifyError, notifySuccess };
