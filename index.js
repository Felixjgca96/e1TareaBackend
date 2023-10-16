import inquirer from "inquirer";
import { promptNuevoGasto } from "./gastosPrompts.js";
import { save, get } from "./filesMethods.js";
const main = async () => {
  let run = true;
  while (run) {
    const action = await inquirer.prompt([
      {
        type: "list",
        name: "chossen",
        message: "Actions",
        choices: [
          {
            value: 1,
            name: "Ingresa Nuevo Gasto",
          },
          {
            value: 2,
            name: "Ver Todos Los Gastos",
          },
          {
            value: 3,
            name: "Salir",
          },
        ],
      },
    ]);
    switch (action.chossen) {
      case 1:
        await crearNuevoGasto();
        break;
      case 2:
        await obtenerTodosLosUsuarios();
      case 3:
        run = false;
      default:
        run = false;
        break;
    }
  }
};

main();

async function crearNuevoGasto() {
  console.log("Agregando nuevo gasto");

  const newGastoData = await promptNuevoGasto();

  console.log("Datos del gasto", newGastoData);

  const usuariosActuales = await get("gastos.json");

  usuariosActuales.push(newGastoData);

  await save("gastos.json", usuariosActuales);
}

async function obtenerTodosLosUsuarios() {
  const usuariosActuales = await get("gastos.json");

  console.log(usuariosActuales);
}
