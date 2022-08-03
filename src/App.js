import logo from './logo.svg';
import './App.css';
import MenuAppBar from './component/navBar';
import Example from './component/carousel';
import CenteredFooter from './component/footer';
import Index from './component/skeleton'
import MyForm from './component/form';


function App() {
  return (
    <div className="App">
      <MenuAppBar/>
      <Example/>
      <CenteredFooter/>
    
    </div>
  );
}

export default App;
