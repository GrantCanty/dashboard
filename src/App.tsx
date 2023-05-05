import React, {FC} from 'react';
import Sidebar from './layouts/sidebar';
import Main from './layouts/main';
import "./assets/styles/app.css"
import useModal from './hooks/useModal';
import Modal from './components/modal';
import View from './types/views/view';

const App: FC = () => {
  const [showModal, toggleShowModal] = useModal()
  const [views, setViews] = React.useState<View[]>(Array())

  function push(v: View): void {
    setViews(prev => (
      [...prev, v]
    ))
  }
  
  return (
    <div className="wrapper">
      <Sidebar setShow={toggleShowModal}/>
      <Main views={views} push={push} />
      <Modal show={showModal} toggleShow={toggleShowModal} views={views} />
    </div>
  );
}

export default App;
