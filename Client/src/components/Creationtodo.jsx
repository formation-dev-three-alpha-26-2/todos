import axios from "axios";
import { useState } from "react";
import API from "../data/API";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { todos } from "../todoscontext";
const Creationtodo = (props) => {

const {getdata} = useContext(todos)
    let nav = useNavigate()


  const [titre, settitre] = useState("");
  const [description, setdescription] = useState("");
  const [imageurl, setimage] = useState("");

  const ajouterTodo = () => {
    let dataàenvoyer = {
      titre: titre,
      description: description,

      urlImage: imageurl,
    };

    axios
      .post(`${API}/todo` , dataàenvoyer)
      .then((rep) => {
      getdata()
       
      })
      .catch((error) => {
        console.log(error);
      });
      nav("/")
  };

  return (
    <div>
      <input
        type="text"
        placeholder="titre"
        onChange={(event) => {
          settitre(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="description"
        onChange={(event) => {
          setdescription(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="image"
        onChange={(event) => {
          setimage(event.target.value);
        }}
      />
      <button
      
      onClick={ajouterTodo}
      > add </button>
    </div>
  );
};
export default Creationtodo;















