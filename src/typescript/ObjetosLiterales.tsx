export const ObjetosLiterales = () => {
  const persona = {
    nombre: "Mauricio",
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
