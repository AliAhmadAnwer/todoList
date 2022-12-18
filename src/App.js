import Dashboard from './components/layout/Dashboard';
import './App.css'
import TodosContainer from './components/layout/TodosContainer';
import Sidebar from './components/layout/Sidebar';
function App() {
  return (
    <div className='App'>
 <Dashboard>
    <TodosContainer />
    <Sidebar />
 </Dashboard>
 </div>
  );
}

export default App;
