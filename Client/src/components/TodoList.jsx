import Tododetail from "./Tododetail";
import { useContext } from "react";
import { todos } from "../todoscontext";
const Todolist = () => {

const {data} = useContext(todos)

  return (
    <div>
      {data.map((el) => {
        return <Tododetail key={el._id} el={el}  />;
      })}
    </div>
  );
};
export default Todolist;
