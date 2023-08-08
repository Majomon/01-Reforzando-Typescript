import { useEffect } from "react";
import { reqResApi } from "../api/reqRes";

export const Usuarios = () => {
  useEffect(() => {
    //Llamado a la Api
    reqResApi
      .get("/users")
      .then((resp) => {
        console.log(resp.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
        <tbody></tbody>
      </table>
    </>
  );
};
