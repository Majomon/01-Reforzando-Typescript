import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const useUsuarios = () => {
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

  return {
    usuarios,
    cargarUsuarios,
  };
};
