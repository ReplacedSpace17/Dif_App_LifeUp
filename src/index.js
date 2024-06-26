import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {createBrowserRouter, Navigate, RouterProvider,} from "react-router-dom";
import ErrorPage from "./error-page";

import Register from "./routes/register";
import User from "./routes/user";

import InicioSesionRoute from './routes/InicioSesionRoute';

//importar route home
import HomeRoute from "./routes/home";
import Loader from './Componentes/Loader/Loader';
import Form_personal from './Componentes/Insert/Form_personal';
import FormContacto from './Componentes/Insert/Form_contacto';
import FormEmergencia from './Componentes/Insert/Form_emergencia';
import Form_Foto from './Componentes/Insert/Form_foto';
import Form_final from './Componentes/Insert/Form_final';

//user
import Form_user_personal from './Componentes/Modulos/Usuarios/Insert/Form_personal';
import Form_user_contacto from './Componentes/Modulos/Usuarios/Insert/Form_contacto';
import Form_user_emergencia from './Componentes/Modulos/Usuarios/Insert/Form_emergencia';
import Form_user_photo from './Componentes/Modulos/Usuarios/Insert/Form_photo';
import Form_user_finally from './Componentes/Modulos/Usuarios/Insert/Form_finally';

//delete
import ModuleUserDelete from './Componentes/Modulos/Usuarios/Delete/Delete';

//modulo de salud
import Salud_dashboard from './Componentes/Salud/Salud_home';
import Form_salud from './Componentes/Salud/form_captura';
import Form_consulta from './Componentes/Salud/consulta';


//modulo psicologia
import PsicologiaDashboard from './Componentes/Psicologia/psicologiaDashboard';
import Consulta from './Componentes/Psicologia/NuevaConsulta';
import InfoPsico from './Componentes/Psicologia/infoPacientePsicologia';

//taller
import TallerDashboard from './Componentes/Talleres/DashboardTaller';
import AddTaller from './Componentes/Talleres/addTaller';
import TallerDelete from './Componentes/Talleres/deleteTaller';
import ActualizarTaller from './Componentes/Talleres/updateTaller';
import RegistrarAsistencia from './Componentes/Talleres/registrarAsistencia';

//buscvar user
import DashboardBuscar from './Componentes/BuscarUsuarios/Buscar_dashboard';

//estadis
import DashboardEstadistica from './Componentes/Estadistica/dashboardEstadistica';

//ADMIN SUPER USUARIOS
import LoginSU from './Componentes/AdminUsers/LoginSU';
import PanelAdmin from './Componentes/AdminUsers/PanelSU';
import Formulario from './Componentes/AdminUsers/addUser';
import DeleteUser from './Componentes/AdminUsers/DeleteUserForm';
import EditSuperUsuario from './Componentes/AdminUsers/EditUser';

//menus roles
import MenuAdmin from './Componentes/ROLES_MENU/Administracion/Dashboard_Admin';
import MenuPsico from './Componentes/ROLES_MENU/Psicologia/Dashboard_Psicologia';
import MenuUsers from './Componentes/Modulos/Usuarios/Menu-usuarios';

import MenuApplication from './Componentes/Menu/MenuApp';
import MenuPsicologia from './Componentes/Modulos/Psicologia/Menu-psicologia';
import MenuEnfermeria from './Componentes/Modulos/Enfermeria/Menu-enfermeria';
import MenuTalleres from './Componentes/Modulos/Talleres/Menu-talleres';
import MenuEstadistica from './Componentes/Modulos/Estadistica/Menu-estadistica';

//psico
import ModulePsicoNuevaConsultaID from './Componentes/Modulos/Psicologia/Consulta/NuevaConsultaForm1';
import ModulePsicoNuevaConsultaForm from './Componentes/Modulos/Psicologia/Consulta/NuevaConsultaForm2';
//widgets
import WidgetPersonalInformation from './Componentes/Modulos/Widgets/CardUserPersonal';
import TestWidgets from './Componentes/Modulos/Widgets/Graficos/testWidgets';

//salud
import ModuleSaludNewExpedienteID from './Componentes/Modulos/Enfermeria/Expediente/NuevoExpedienteForm1';
import ModuleSaludNewExpedienteCreate from './Componentes/Modulos/Enfermeria/Expediente/NuevoExpedienteForm2';
import ModuleSaludNewConsultaID from './Componentes/Modulos/Enfermeria/Consultas/NuevaConsultaForm1';
import ModuleSaludNewConsultaForm from './Componentes/Modulos/Enfermeria/Consultas/NuevaConsultaForm2';


//taller
import ModuleTallerAddForm from './Componentes/Modulos/Talleres/Agregar/AgregarTaller';
import ModuleTallerDelete from './Componentes/Modulos/Talleres/Eliminar/DeleteTaller';





import Formulario_Personal from './Componentes/AdminUsers/addInformation';


//nuevas ventanas
//aqui poner admin

//psico
import PanelPsicologia from './Componentes/NewPsicologia/PanelPsicologia';
import CreateConsultaPsicologia from './Componentes/NewPsicologia/CreateConsultaPsicologia';
import CreateConsultaPsicologia2 from './Componentes/NewPsicologia/CreateConsultaPsicologia2';
import ViewBoleta from './Componentes/NewPsicologia/ViewBoleta';


import UnauthorizedPage from './Componentes/PageNoAutorized/Unauthorized';
import HomePsicologia from './Componentes/NewPsicologia/HomePsicologia';
import HomeEnfermeria from './Componentes/NewEnfermeria/HomeEnfermeria';
import PanelEnfermeria from './Componentes/NewEnfermeria/PanelEnfermeria';
import CreateConsultaEnfermeria1 from './Componentes/NewEnfermeria/CreateConsultaEnfermeria';
import CreateConsultaEnfermeria2 from './Componentes/NewEnfermeria/CreateConsultaEnfermeria2';
import ViewBoletaEnfermeria from './Componentes/NewEnfermeria/ViewBoleta';

import PanelTalleres from './Componentes/AdminUsers/Talleres/PanelTalleres';
import CreateTaller1 from './Componentes/AdminUsers/Talleres/CreateTaller1';
import CreateTaller2 from './Componentes/AdminUsers/Talleres/CreateTaller2';
import ViewTaller from './Componentes/AdminUsers/Talleres/ViewTaller';

import PanelInstructor from './Componentes/NewInstructores/PanelInstructor';
import HomeInstructor from './Componentes/NewInstructores/HomeInstructor';
import CreateAsistencia from './Componentes/NewInstructores/CreateAsistencia';

import ReasignarTaller from './Componentes/AdminUsers/Talleres/ReasignarTaller';

import PanelPsicologiaAdministrador from './Componentes/AdminUsers/PsicologiaAdmin/PanelPsicologiaAdmin';
import PanelEnfermeriaAdmin from './Componentes/AdminUsers/EnfermeriaAdmin/PanelEnfermeriaAdmin';

import ViewGraphic from './Componentes/graphics/Componentes/Line';

import HomeEstadistica from './Componentes/graphics/ViewEstadistica';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="login"/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/login",
    element:  <InicioSesionRoute/>,
  },
  {
    path: "/home",
    element: <HomeRoute/>,
  },
  ////////////////////////////////////-> usuarios modulo
  {
    path: "/addUserPersonal",
    element: <Form_user_personal/>,
  },
  {
    path: "/addUserContacto",
    element: <Form_user_contacto/>,
  },
  {
    path: "/addUserEmergencia",
    element: <Form_user_emergencia/>,
  },
  {
    path: "/addUserFoto",
    element: <Form_user_photo/>,
  },
  {
    path: "/formFinal",
    element: <Form_user_finally/>,
  },
//modulo de slaud
{
  path: "/saludDashboard",
  element: <Salud_dashboard/>,
},
{
  path: "/formSalud",
  element: <Form_salud/>,
},
{
  path: "/formConsulta",
  element: <Form_consulta/>,
},


//modulo psicologia
{
  path: "/psicologia-Dashboard",
  element: <PsicologiaDashboard/>,
},
{
  path: "/consultaPsico",
  element: <Consulta/>,
},
{
  path: "/infoPsico",
  element: <InfoPsico/>,
},
//buscar usuarios
{
  path: "/BuscarUsuarioHome",
  element: <DashboardBuscar/>,
},

//taller
{
  path: "/dashboardTaller",
  element: <TallerDashboard/>,
},
{
  path: "/addTaller",
  element: <AddTaller/>,
},
{
  path: "/deleteTaller",
  element: <TallerDelete/>,
},
{
  path: "/ActualizarTaller",
  element: <ActualizarTaller/>,
},
{
  path: "/AsistenciaTaller",
  element: <RegistrarAsistencia/>,
},
//stats
{
  path: "/EstadisticaDash",
  element: <DashboardEstadistica/>,
},

// ADMIN SUIPER USUARIOS
{
  path: "/LoginSU",
  element: <LoginSU/>,
},

{
  path: "/DashboardRoles",
  element: <PanelAdmin/>,
  
},
{
  path: "/FormularioPersonal",
  element: <Formulario/>,
},
{
  path: "/DeleteUserPersonal",
  element: <DeleteUser/>,
},
{
  path: "/EditUserPersonal",
  element: <EditSuperUsuario/>,
},

///MENU ROLES DE USUARIOS
{
  path: "/MenuAdmin",
  element: <MenuAdmin/>,
},
{
  path: "/MenuPsico",
  element: <MenuPsico/>,
},




{
  path: "/MenuUsers",
  element: <MenuUsers/>,
},
{
  path: "/MenuApp",
  element: <MenuApplication/>,
},
{
  path: "/MenuPsicologia",
  element: <MenuPsicologia/>,
},
{
  path: "/MenuEnfermeria",
  element: <MenuEnfermeria/>,
},
{
  path: "/MenuTalleres",
  element: <MenuTalleres/>,
},
{
  path: "/MenuEstadistica",
  element: <MenuEstadistica/>,
},
{
  path: "/MouleUserDelete",
  element: <ModuleUserDelete/>,
},

///psico
{
  path: "/PsicologiaNewConsultID",
  element: <ModulePsicoNuevaConsultaID/>,
},
{
  path: "/Psicologia-NewConsult-Form",
  element: <ModulePsicoNuevaConsultaForm/>,
},

////////////////////////////////////////////////----------------------salud

{////////////////////////////////////////////////----------------------espediente
  path: "/Salud-Expediente-ID",
  element: <ModuleSaludNewExpedienteID/>,
},

{
  path: "/Salud-Expediente-Create",
  element: <ModuleSaludNewExpedienteCreate/>,
},
////////////////////////////////////////////////----------------------consultas
{
  path: "/Salud-Consulta-ID",
  element: <ModuleSaludNewConsultaID/>,
},
{
  path: "/Salud-Consulta-Create",
  element: <ModuleSaludNewConsultaForm/>,
},

////////////////////////////////////////////////----------------------taller
//add
{
  path: "/Taller-Add-Form",
  element: <ModuleTallerAddForm/>,
},
//delte
{
  path: "/Taller-Delete",
  element: <ModuleTallerDelete/>,
},




///////////////////////////////widgets
{
  path: "/testWidgetUserInfo",
  element: <WidgetPersonalInformation/>,
},
{
  path: "/testWidgets",
  element: <TestWidgets/>,
},
  /*--------------------------------------------------RUTAS PARA ACCESO CON LOADER*/
  {
    path: "/loader",
    element:  <Loader />,
  },
  {
    path: "/loader-Home",
    element:  <Loader to="/home" delay={2000} />,
  },
  {
    path: "/loader-Login",
    element:  <Loader to="/login" delay={1000} />,
  },
  {
    path: "/loader-DashboardSU",
    element:  <Loader to="/DashboardRoles" delay={1000} />,
  },
/*--------------------------------------------------rutas menu roles*/
  {
    path: "/loader-MenuAdmin",
    element:  <Loader to="/MenuAdmin" delay={1000} />,
  },

  
//------------------nuevo app
{
  path: "/NewPersonalInformation",
  element: <Formulario_Personal/>,
},

{
  path: "/PanelPsicologia",
  element: <PanelPsicologia/>,
},
{
  path: "/Nueva-cosulta-psicologia",
  element: <CreateConsultaPsicologia/>,
},
{
  path: "/Nueva-cosulta-psicologia-informacion",
  element: <CreateConsultaPsicologia2/>,
},
{
  path: "/Psicologia/Boleta",
  element: <ViewBoleta/>,
},

{
  path: "/PageNotFound",
  element: <UnauthorizedPage/>,
},

{
  path: "/Home/Psicologia",
  element: <HomePsicologia/>,
},
{
  path: "/Home/Enferemeria",
  element: <HomeEnfermeria/>,
},
{
  path: "/PanelEnfermeria",
  element: <PanelEnfermeria/>,
},
{
  path: "/Enfermeria/Consulta/Create/1",
  element: <CreateConsultaEnfermeria1/>,
},
{
  path: "/Enfermeria/Consulta/Create/2",
  element: <CreateConsultaEnfermeria2/>,
},
{
  path: "/Enfermeria/Boleta",
  element: <ViewBoletaEnfermeria/>,
},


{
  path: "/PanelTalleres/Admin",
  element: <PanelTalleres/>,
},
{
  path: "/PanelTalleres/Create",
  element: <CreateTaller1/>,
},
{
  path: "/PanelTalleres/Create/Asignacion",
  element: <CreateTaller2/>,
},
{
  path: "/PanelTalleres/View/Taller",
  element: <ViewTaller/>,
},
{
  path: "/PanelInstructor/Asistencia",
  element: <PanelInstructor/>,
},
{
  path: "/PanelInstructor/Home",
  element: <HomeInstructor/>,
},
{
  path: "/PanelInstructor/Asistencia/Create",
  element: <CreateAsistencia/>,
},

{
  path: "/PanelTalleres/Reasignar",
  element: <ReasignarTaller/>,
},
{
  path: "/PanelAdministrador/Psicologia",
  element: <PanelPsicologiaAdministrador/>,
},
{
  path: "/PanelAdministrador/Enfermeria",
  element: <PanelEnfermeriaAdmin/>,
},

{
  path: "/line",
  element: <ViewGraphic/>,
},

{
  path: "/Home/Admnistrador/Resumen",
  element: <HomeEstadistica/>,
},

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
