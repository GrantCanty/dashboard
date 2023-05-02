import {FC} from 'react';
import Sidebar from './layouts/sidebar';
import Main from './layouts/main';
import "./assets/styles/app.css"

const App: FC = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
