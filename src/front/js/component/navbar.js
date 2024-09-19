import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const handleLogOutRedirect = () => {
    actions.logOut()
    navigate("/")
  }

  return (
    <nav className="navbar d-flex align-items-center" style={{
      backgroundColor: "#6793AE", height: "130px"
    }}>
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand ">
          <h1 className="fw-bold " style={{ fontFamily: "Brush Script MT", color: "white", fontSize: "4rem", marginLeft: "2rem" }}>LOOPY</h1>
        </Link>

        <div className="navbar navbar-expand-lg ms-auto d-inline-flex">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav me-auto mx-auto">
                <Link
                  to={"/"}
                  className="nav-link active mx-2 "
                  style={{ color: "white" }}
                >
                  INICIO
                </Link>
                {store.user?.profile_programador && (
                  <>
                    <Link
                      to={"/timeline"}
                      className="nav-link active mx-2"
                      style={{ color: "white" }}
                    >
                      OFERTAS
                    </Link>
                    <Link
                      to="/favoritosPage"
                      className="nav-link active mx-2"
                      style={{ color: "white" }}
                    >
                      FAVORITOS

                    </Link>
                    <Link
                      to={"/Userview"}
                      className="nav-link active mx-2 "
                      style={{ color: "white" }}

                    >
                      PERFIL
                    </Link>
                  </>
                )}
                {store.user?.profile_empleador && (
                  <>
                    <Link
                      to={"/formoffer"}
                      className="nav-link active "
                      style={{ color: "white" }}
                    >
                      CREAR OFERTA
                    </Link>

                    <Link
                      to={"/Companyview"}
                      className="nav-link active"
                      style={{ color: "white" }}
                    >
                      PERFIL
                    </Link>
                  </>
                )}

                {store.user ? (
                  <>

                    {store.user.profile_empleador && (
                      <button
                        type="button"
                        className="btn rounded-pill pe-none mx-2"
                        style={{
                          backgroundColor: "#70879C",
                          borderColor: "white",
                          color: "white",

                        }}
                      >
                        Suscripción: {store.user.profile_empleador.premium ? "Premium" : "Free"}
                      </button>

                    )}

                    <button
                      type="button"
                      className="btn rounded-pill mx-2 "
                      style={{
                        backgroundColor: "white",
                        borderColor: "white",
                        color: "#70879C",
                      }}
                    >
                      {store.user.name}
                    </button>

                    <button
                      onClick={handleLogOutRedirect}
                      type="button"
                      className="btn rounded-pill mx-2"
                      style={{
                        backgroundColor: "#70879C",
                        borderColor: "white",
                        color: "white",
                      }}
                    >
                      Logout
                    </button>


                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => navigate("/login")}
                      className="btn rounded-pill mx-2"
                      style={{
                        backgroundColor: "#70879C",
                        borderColor: "#70879C",
                        color: "white",
                      }}
                    >
                      INICIAR SESIÓN
                    </button>
                    <button
                      type="button"
                      className="btn rounded-pill mx-2"
                      style={{
                        backgroundColor: "white",
                        borderColor: "white",
                        color: "#70879C",
                      }}
                      onClick={() => navigate("/register")}
                    >
                      REGISTRARSE
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <button
          className="navbar-toggler navHamburguer"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="fa-solid fa-bars text-white"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  style={{ color: "#6793AE", marginTop: "115px" }}
                  aria-current="page"
                  to="/sobrenosotros"
                >
                  Sobre nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  style={{ color: "#6793AE", marginTop: "20px" }}
                  aria-current="page"
                  to="/contact"
                >
                  Contáctanos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  style={{ color: "#6793AE", marginTop: "20px" }}
                  aria-current="page"
                  to="/preguntasFrecuentes"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav >
  );
};