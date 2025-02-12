import { Link } from "react-router-dom";

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#f4f4f4" }}>
      <Link to="/">Candidate Search</Link>
      <Link to="/saved">Saved Candidates</Link>
    </nav>
  );
};

export default Nav;
