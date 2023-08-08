export const TiposBasicos = () => {
  const nombre: string = "Mauricio";
  const edad: number = 32;
  const estaACtivo: boolean = true;

  // Para un arreglo de String
  const poderes: string[] = ["Velocidad", "Volar", "Respirar bajo el agua"];

  // Para un arreglo de Números
  const listaNum: number[] = [1, 2, 3, 4];

  return (
    <>
      <h3>Tipos Básicos</h3>
      {nombre} , {edad} , {estaACtivo ? "Activo" : "No activo"}
      <hr />
      {poderes.join(", ")}
      <hr />
      {listaNum.join(", ")}
    </>
  );
};
