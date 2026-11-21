import axios from "axios";
import API from "../data/API";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { todos } from "../todoscontext";
const Tododetail = (props) => {
const nav = useNavigate()
const {getdata} = useContext(todos)
  const deletetodo = () => {
    axios
      .delete(`${API}/todo/${props.el._id}`)
      .then((rep) => {
       getdata();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const marquerTerminé = () => {
    axios
      .put(`${API}/todo/${props.el._id}/toggle`)
      .then((rep) => {
       getdata();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
    //   style={{
    //     textDecoration:props.el.termine === true ? "line-through" : "none",
    //   }}
    >

        { props.el.termine === true ? 
        <div style={{ textDecoration:  "line-through" }} >
          <h1
        onClick={() => {
          marquerTerminé();
        }}
      >
        {props.el.titre}
      </h1>

      <p> {props.el.description} </p> 
      </div> : 
          <div>
          <h1
        onClick={() => {
          marquerTerminé();
        }}
      >
        {props.el.titre}
      </h1>

      <p> {props.el.description} </p> 
      </div> 

    }


      <img src={props.el.urlImage} alt="" style={{ height: "200px" }} />
      <img
        src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
        alt=""
        style={{ height: "20px" }}
        onClick={deletetodo}
      />
      <img src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/vector-icons-4/edit-flwwwz417de3u3nzvstgpu.png/edit-qtep4ftgzlsz4sl22a43m9.png?_a=DATAiZAAZAA0" alt="" 
      onClick={() => nav(`/edit/${props.el._id}`) }
            style={{ height: "20px" }}
      />
    </div>
  );
};
export default Tododetail;
