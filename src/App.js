import logo from './logo.svg';

import MenuAppBar from './component/navBar';
import Example from './component/carousel';
import CenteredFooter from './component/footer';
import RowAndColumnSpacing from './component/gridContainer';



function App() {
  return (
    <div >
      <MenuAppBar/>
      <Example/>
      <RowAndColumnSpacing/>
      <CenteredFooter/>
     
    
    </div>
  );
}

export default App;
