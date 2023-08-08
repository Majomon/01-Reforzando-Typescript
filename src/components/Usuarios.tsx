import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const paginaRef = useRef(1);

  useEffect(() => {
    //Llamado a la Api
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    const resp = await reqResApi.get<ReqResListado>("/users", {
      params: {
        //.current es la referencia al valor que contiene
        page: paginaRef.current,
      },
    });

    if (resp.data.data.length > 0) {
      setUsuarios(resp.data.data);
      paginaRef.current++;
      console.log(paginaRef.current);
    } else {
      alert("No hay más registros");
    }

    /*       .then((resp) => {
        setUsuarios(resp.data.data);
      })
      .catch((err) => console.log(err)); */
  };

  const renderItem = ({
    id,
    email,
    first_name,
    last_name,
    avatar,
  }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <th>
          <img
            src={avatar}
            alt={first_name}
            style={{ width: 50, borderRadius: 100 }}
          />
        </th>
        <th>
          {first_name} {last_name}
        </th>
        <th>{email}</th>
      </tr>
    );
  };
  return (
    <>
      <h3>Usuarios:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map((usuario) => renderItem(usuario))}</tbody>
      </table>
      <button className="btn btn-primary" onClick={cargarUsuarios}>
        Siguientes
      </button>
    </>
  );
};
