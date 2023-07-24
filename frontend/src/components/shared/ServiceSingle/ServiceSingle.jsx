import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import AuthContext from "../../../context/AuthContext";
import "./service.css";

const Service = ({ service }) => {
  const navigate = useNavigate();
  const { token, user } = useContext(AuthContext);
  const [error, setError] = useState("");
  // Aquí puedes imprimir el objeto service en la consola para verificar si los datos están llegando correctamente

  return (
    <>
      <header className="service">
        {service.username}
        {service.createdAt}
        {service.title}
      </header>
      <body className="service">
        {service.description}
        {service.fileName}
      </body>
      <footer className="service">
        {service.id}
        {service.owner}
        {service.resolved}
      </footer>
    </>
  );
};

Service.propTypes = {
  service: PropTypes.object.isRequired,
};

export default Service;
