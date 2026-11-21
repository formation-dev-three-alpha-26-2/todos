import { createContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import API from "./data/API";
export const todos = createContext();

const Todocontext = ({ children }) => {
  const [data, setdata] = useState([]);

  const getdata = () => {
    axios
      .get(`${API}/todo`)
      .then((rep) => {
        setdata(rep.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  return <todos.Provider value={{ data, getdata }}>{children}</todos.Provider>;
};

export default Todocontext;
