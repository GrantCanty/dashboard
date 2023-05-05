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
    
  /*let cp: Component = new Component(1,1,2,2)
  cp.title = `Test: ${0}`
  c.push(cp)

  cp = new Component(3,1,1,1)
  cp.title = `Test: ${1}`
  c.push(cp)

  cp = new Component(3,2,1,1)
  cp.title = `Test: ${2}`
  c.push(cp)

  cp = new Component(1,3,3,3)
  cp.title = `Test: ${3}`
  c.push(cp)*/

  
  
  return (
    <div className="wrapper">
      <Sidebar setShow={toggleShowModal}/>
      <Main views={views} push={push} />
      <Modal show={showModal} toggleShow={toggleShowModal} views={views} />
    </div>
  );
}

export default App;
