import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <div className="d-flex justify-content-between p-3 align -items-center">
      <Link to={"/home"} className="d-flex gap-3 align-items-center">
        <img height={40} src="/c-logo.png" />
        <h3 className="text-light ">Coinmania</h3>
      </Link>
      <nav className="d-flex gap-3 ">
        <NavLink className={"text-light "} to={"/"}>
          Giriş yap
        </NavLink>
        <NavLink className={"text-light text-decoration-none"} to={"/home"}>
          Ana Sayfa
        </NavLink>
      </nav>
    </div>
  );
};

export default HeaderView;
