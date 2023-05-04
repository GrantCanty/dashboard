import {FC} from 'react';
import Sidebar from './layouts/sidebar';
import Main from './layouts/main';
import "./assets/styles/app.css"
import useModal from './useModal';

const App: FC = () => {
  const [showModal, toggleShowModal] = useModal()
  
  return (
    <div className="wrapper">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
