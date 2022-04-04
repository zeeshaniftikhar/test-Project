import { Link } from "react-router-dom";


function Routes () {
    return (
      <div>
        <nav >
          <ul >
            <li className="Nav_items">
              <Link className="Nav_items_link" to="/">In Call Page</Link>
            </li>
            <li className="Nav_items">
              <Link className="Nav_items_link" to="/waiting">Waiting Page</Link>
            </li>
            <li className="Nav_items">
              <Link className="Nav_items_link" to="/Endcall">End Call</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  
  }
  export default Routes;