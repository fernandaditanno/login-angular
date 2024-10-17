import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UsuarioReadComponent} from "./usuario-read/usuario-read.component";
import {UsuarioCreateComponent} from "./usuario-create/usuario-create.component";
import {UsuarioDeleteComponent} from "./usuario-delete/usuario-delete.component";

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "listar",
        component: UsuarioReadComponent
    },
    {
        path: "criar",
        component: UsuarioCreateComponent
    },
    {
        path: "excluir",
        component: UsuarioDeleteComponent
    },
    {
        path: "editar/:id",
        component: UsuarioCreateComponent
    },
];
