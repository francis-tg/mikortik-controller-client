import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddRouter from "./Pages/AddRouter";
import NavBar from "./components/NavBar";
function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<AddRouter />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
