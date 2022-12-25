import Dashboard from './components/layout/Dashboard';

import TodosContainer from './components/layout/TodosContainer';
import Sidebar from './components/layout/Sidebar';
import TodoProvider from './context/todo-provider';
function App() {
  return (
    <TodoProvider>
   
 <Dashboard>
    <TodosContainer />
    <Sidebar />
 </Dashboard>
 
 </TodoProvider>
  );
}

export default App;
