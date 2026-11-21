import axios from "axios";
import { useState, useEffect } from "react";
import API from "../data/API";
import { useContext } from "react";
import { todos } from "../todoscontext";
import { useNavigate, useParams } from "react-router";
const Edittodo = (props) => {
  let nav = useNavigate();
  let {id} = useParams();

const {getdata} = useContext(todos)
  const [titre, settitre] = useState("");
  const [description, setdescription] = useState("");
  const [imageurl, setimage] = useState("");
  const getdataelement = () => {
    axios
      .get(`${API}/todo/${id}`)
      .then((rep) => {
        console.log(rep);

        settitre(rep.data.titre);
        setdescription(rep.data.description);
        setimage(rep.data.urlImage);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getdataelement();
  }, []);

  const edit = () => {
    let data = {
      titre: titre,
      description: description,

      urlImage: imageurl,
    };

    axios
      .put(`${API}/todo/${id}`, data)
      .then((rep) => {
       getdata();
      })
      .catch((error) => {
        console.log(error);
      });
    nav("/");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="titre"
        value={titre}
        onChange={(event) => {
          settitre(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(event) => {
          setdescription(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="image"
        value={imageurl}
        onChange={(event) => {
          setimage(event.target.value);
        }}
      />
      <button onClick={edit} > edit </button>
    </div>
  );
};
export default Edittodo;








// id
// données lkdom 
// req 
