import inquirer from "inquirer";

export async function promptNuevoGasto() {
  return await inquirer.prompt([
    {
      type: "input",
      name: "nombre_del_gasto",
      message: "Nombre del gasto",
    },
    {
      type: "input",
      name: "monto",
      message: "Monto",
    },
    {
      type: "input",
      name: "fecha",
      message: "Fecha",
    },
    {
      type: "input",
      name: "tipo_de_pago",
      message: "Tipo de pago",
    },
  ]);
}
