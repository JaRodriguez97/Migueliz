function realizarPedido() {
  
  return "./Menu/menu";
}

console.log(this);

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toogleMenu() {
  var menuToggle = document.querySelector(".toggle");
  var menu = document.querySelector(".menu");
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
}

function toMenu(e) {
  let content = document.getElementById("content");

  console.log(Menu2, Menu);
}

// ServicioController.WebServiceSend = async (req, res) => {
//   let filtros = req.body,
//     Authorization = "Basic RVBTTXV0dWFsc2VyOlF4UmRlbHBGWXI=",
//     correoElectronico = "desarrollosistemas@prevrenal.org",
//     countMil = 0,
//     groupErr = [],
//     headers = {
//       Authorization,
//       "Content-Type": "application/json",
//       "Ocp-Apim-Subscription-Key": "d594ad907dcc4ca89cf9da7b5cba09f4",
//     },
//     interval,
//     method = "POST",
//     pacientes = await filtroPacientes(filtros),
//     pack = 0,
//     posi = 0,
//     url = `http://13.83.89.133:9015/api/CargaPaginada/CargaExternaMasiva?correoElectronico=${correoElectronico}`,
//     writeData = [[]],
//     result = [],
//     timeOut,
//     config = {
//       method,
//       url,
//       headers,
//       data: [],
//       maxContentLength: Infinity,
//       maxBodyLength: Infinity,
//     };

//   if (!pacientes.length)
//     return catchError(
//       pacientes,
//       res,
//       "No hay pacientes con estos filtros",
//       400,
//       "filtroPacientes"
//     );
//   // filtros.prestadorId = "FUNCENTRA ";
//   for (const item in filtros) {
//     // Filtro Manual
//     if (!filtros[item]) return;

//     pacientes = pacientes.filter((paciente) => {
//       if (item == "entidadId") return filtros[item] == paciente.eps;
//       else if (item == "sedeId") return filtros[item] == paciente.municipio;

//       paciente.consultas = paciente.consultas.filter((consulta) => {
//         if (item == "prestadorId") {
//           consulta.prestador = consulta.prestador.filter(
//             (prestador) => filtros[item] == prestador.nombre
//           );

//           // while (consulta.prestador.indexOf(undefined) != -1) {
//           //   let indexUndefined = consulta.prestador.indexOf(undefined);
//           //   consulta.prestador.splice(indexUndefined, 1);
//           // }
//           return !!consulta.prestador.length;
//         } else if (item == "startDate")
//           return (
//             moment(filtros[item]).format("YYYY-MM-DD HH:mm:ss") <=
//             moment(consulta.historia.fechaInicioAtencion).format(
//               "YYYY-MM-DD HH:mm:ss"
//             )
//           );
//         else if (item == "endDate")
//           return (
//             moment(filtros[item]).format("YYYY-MM-DD HH:mm:ss") >=
//             moment(consulta.historia.fechaInicioAtencion).format(
//               "YYYY-MM-DD HH:mm:ss"
//             )
//           );
//       });

//       // while (paciente.consultas.indexOf(undefined) != -1) {
//       //   let indexUndefined = paciente.consultas.indexOf(undefined);
//       //   paciente.consultas.splice(indexUndefined, 1);
//       // }

//       console.log(
//         "🚀 ~ file: ServicioController.js ~ line 134 ~ pacientes=pacientes.filter ~ paciente.consultas",
//         paciente.consultas
//       );
//       return !!paciente.consultas.length;
//     });

//     // while (pacientes.indexOf(undefined) != -1) {
//     //   let indexUndefined = pacientes.indexOf(undefined);
//     //   pacientes.splice(indexUndefined, 1);
//     // }
//   }

//   if (!pacientes.length)
//     return catchError(
//       pacientes,
//       res,
//       "No hay Pacientes con estos filtros",
//       400,
//       "filtro manual"
//     );

//   console.log("Pacientes a enviar: ", pacientes.length);
//   /* Returning from the function. */
//   return;
//   interval = setInterval(envio, 0);

//   async function envio() {
//     config.data = [];
//     pack++;

//     if (interval._repeat == 1 && interval._idleTimeout == 1) {
//       interval._repeat = 25000;
//       interval._idleTimeout = 25000;
//     }

//     for (let k = 0; k < pacientes.length; k++) {
//       let paciente = pacientes[k];

//       if (countMil >= 500) {
//         countMil = 0;
//         break;
//       }

//       posi = k;
//       paciente.consultas.forEach((consulta) => {
//         //"1-07-2020" a "30-06-2021 23:59"
//         if (
//           moment(consulta.historia.fechaInicioAtencion).format(
//             "YYYY-MM-DD HH:mm:ss"
//           ) >= moment("2021-07-01").format("YYYY-MM-DD HH:mm:ss") ||
//           moment(consulta.historia.fechaInicioAtencion).format(
//             "YYYY-MM-DD HH:mm:ss"
//           ) <= moment("2020-06-30").format("YYYY-MM-DD HH:mm:ss")
//         )
//           return;

//         const objetoDatos = {
//           codigoEntidadRegistra: "ESS207",
//           codigoEntidadPerteneceDato: "ESS207",
//           id: null,
//           codigoEntidadPertenece: () => {
//             if (consulta.nitEntidadPertenece)
//               return consulta.nitEntidadPertenece;
//             return 0;
//           },
//           tipoDocumento: paciente.tipoDocumento,
//           numeroDocumento: paciente.numeroDocumento,
//           idCobertura: 39,
//           idPeriodo: 123,
//           idCategoria: 123,
//           idEstadoValidacion: 1,
//           idEstadoProceso: 1,
//           variables: variables(paciente, consulta),
//         };

//         config.data.push(objetoDatos);
//         countMil++;
//         // console.log(countMil);
//       });
//     }

//     pacientes.splice(0, posi + 1);
//     posi = 0;
//     if (!config.data.length) return;
//     console.log(`Envio #${pack} con ${config.data.length} registros`);
//     // return;
//     writeData[writeData.length - 1].push(config.data);
//     writeData.push([]);
//     await axios(config)
//       .then((r) => {
//         console.log(result.length + 1, r.data);
//         result.push({ paquete: result.length + 1, respuesta: r.data });
//       })
//       .catch((err) => {
//         console.log("Error", result.length + 1);
//         result.push({ paquete: result.length + 1, respuesta: "Error" });
//         groupErr.push(
//           catchError(err, null, "Error al enviar datos", 500, [
//             "axios(config)",
//             `envio[${pack}].json`,
//           ])
//         );
//       })
//       .finally(async () => {
//         if (!pacientes.length && !timeOut) {
//           clearInterval(interval);
//           timeOut = setTimeout(print, 250000);
//         }
//       });
//   }

//   async function print() {
//     if (!!groupErr.length) {
//       writeData.forEach(async (dataW, k) => {
//         if (!!dataW.length)
//           await fs.promises
//             .writeFile(`../../envio[${k}].json`, JSON.stringify(dataW), {
//               encoding: "utf8",
//             })
//             .then(() => console.log("Documento ", k, " escrito"))
//             .catch((err) => console.error("Error writeFile: ", err));
//       });

//       fs.promises
//         .writeFile("../../errores.json", JSON.stringify(groupErr), {
//           encoding: "utf8",
//         })
//         .then(() => console.log("Escritura de groupError finalizada"))
//         .catch((err) => console.error("Error writeFile: ", err));
//     }
//     clearTimeout(timeOut);
//     return res.status(200).send(result);
//   }
// };
