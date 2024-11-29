import logo from './logo.svg';
import Image from './image.jpg'
import './App.css';
import Welcome from './Welcome';
import Name from './Name'
import Greeting from './Greeting';
import MyForm from './myForm';
import ProfileCard from './profileCard';
import LoginForm from './loginForms'
import Increment from './increment'
import TaskManagement from './TaskManagement';
import AppUseContext from './appUseContext';
import Counter from './counter';
import Input from './input';
import useFetch from './useFetch';
import UserDetails from './userDetails';
import LaunchTracker from './launchTracker';

function App() {
  const data = useFetch()
  return (
    <div className="App">
      <TaskManagement />
    </div>
  );
}

export default App;
