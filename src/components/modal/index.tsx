import Modal from 'react-modal';

type Props = {
  isOpen: boolean,
  message: string,
  onClose: () => void
  title: string
}

const CustomModal = ({ isOpen, onClose, message, title } : Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Error Modal"
      className={`bg-bg-color dark:bg-slate-800 dark:text-white rounded-md 
      w-fit h-fit border-2 border-primary-color p-8 flex flex-col items-center justify-center
      min-w-[300px] min-h-[200px] max-w-[600px] max-h-[300px] z-50`}
      overlayClassName={`fixed inset-0 flex items-center justify-center bg-white bg-opacity-75`}
    >
      <h2
        className={`text-2xl font-bold text-center mb-6 text-secondary-color`}
      >
        {title}
      </h2>
      <p
        className='text-justify text-md'
      >
        {message}
      </p>
      <button 
        onClick={onClose}
        className={`bg-primary-color text-white rounded-md p-1 mt-8
          hover:bg-secondary-color hover:text-primary-color transition duration-300 ease-in-out`}
      >
        Close
      </button>
    </Modal>
  );
};

export default CustomModal;