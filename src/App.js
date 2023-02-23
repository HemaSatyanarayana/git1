import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddList from "./AddList";
import Home from "./Home";

export const ListContext = React.createContext({});
const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <ListContext.Provider value={{ todos, setTodos }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addlist" element={<AddList />} />
          </Routes>
        </BrowserRouter>
      </ListContext.Provider>
    </div>
  );
};

export default App;
