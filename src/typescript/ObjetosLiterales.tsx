/* Las interfaces mandan sobre las definiciones de los objetos. */
/* Las interfaces solo sirven para ponerles reglas de valifacion a los objetos */
/* Lo de abajo se puede hacer pero hay otro modo mejor */
/* interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: {
    pais: string;
    casa: number;
  };
} */

interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  casa: number;
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: "Mauricio",
    edad: 35,
    direccion: {
      pais: "Argentina",
      casa: 3284,
    },
  };
  return (
    <>
      <h3>Objetos literales</h3>
      {/* Transforma un objeto a su representacion JSON como si fuera un STRING */}
      {/*  {JSON.stringify(persona)} */}
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};
