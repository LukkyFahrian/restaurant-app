/* eslint-disable linebreak-style */
import '../views/components/pre-loader';

const loaderWait = async () => {
  setTimeout(() => {
    const loading = document.querySelector('#loading');
    loading.style.display = 'none';
  }, 300);
};

export default loaderWait;
