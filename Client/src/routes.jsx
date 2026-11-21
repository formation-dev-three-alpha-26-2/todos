import { Route, Routes } from "react-router";
import Todolist from "./components/TodoList";
import Creationtodo from "./components/Creationtodo";
import Edittodo from "./components/Edittodo";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Todolist />} />

      <Route path="/creation" element={<Creationtodo />} />
      <Route path="/edit/:id" element={<Edittodo />} />
    </Routes>
  );
};
export default RoutesApp;
