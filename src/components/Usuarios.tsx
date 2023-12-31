import { useUsuarios } from "../hooks/useUsuarios";
import { Usuario } from "../interfaces/reqRes";

export const Usuarios = () => {
  const { usuarios, pagSiguiente, pagAnterior } = useUsuarios();
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
      <button className="btn btn-primary" onClick={pagAnterior}>
        Anteriores
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={pagSiguiente}>
        Siguientes
      </button>
    </>
  );
};
