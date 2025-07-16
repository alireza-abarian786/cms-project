import './App.css';
import SideBar from './components/sidebar/SideBar';
import TopBar from './components/topbar/TopBar';
import routers from './routes';
import { useRoutes } from 'react-router-dom';

function App() {
  const route = useRoutes(routers)

  return (
    <div className="App">
      <TopBar />

      <div className="contentPanelContainer">
        <SideBar />
        {route}
      </div>

    </div>
  );
}

export default App;
