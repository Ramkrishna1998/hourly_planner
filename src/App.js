import logo from './logo.svg';
import './App.css';
import Dashborad from './components/Planner/dashboard'
function App() {
  return (
    <div className='p-14'>
      <div class="max-w-2xl mx-auto py-4 px-4 sm:py-4 sm:px-6 lg:px-8">
        <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl uppercase sm:tracking-tight lg:text-6xl">Hourly Planner</p>
      </div>
      <Dashborad />
    </div>
  );
}

export default App;
