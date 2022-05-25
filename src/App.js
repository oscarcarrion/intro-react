import './App.css';
import Galeria from './components/Galeria';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Galeria />
      </div>
    </ChakraProvider>
  );
}

export default App;
