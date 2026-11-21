import axios from "axios";
import RoutesApp from "./routes";

import { Link } from "react-router";

const App = () => {
  return (
    <div>
      <Link to="/creation"> add todo </Link>

      <RoutesApp />
    </div>
  );
};

export default App;

// 1 - creation context   produits = []

// 2- x.Provider values = {{data , getdata , nom }}

// 3-  let  { data  } =  useContext(porduits)
