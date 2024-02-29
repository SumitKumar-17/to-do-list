import './App.css';
import { CustomKanban } from './components/CustomKanban';

function App() {
  return (
    <div className="flex flex-col items-center justify-center  bg-neutral-900">
      <h1 className="text-4xl items-center p-8 text-white">To-Do-List</h1>
      <CustomKanban/>
    </div>
  );
}

export default App;
