import {FC} from 'react';
import Sidebar from './layouts/sidebar';
import Main from './layouts/main';
import "./assets/styles/app.css"
import useModal from './hooks/useModal';
import Modal from './components/modal';

const App: FC = () => {
  const [showModal, toggleShowModal] = useModal()
  
  return (
    <div className="wrapper">
      <Sidebar show={showModal} setShow={toggleShowModal}/>
      <Main />
      <Modal show={showModal} setShow={toggleShowModal} />
    </div>
  );
}

export default App;
