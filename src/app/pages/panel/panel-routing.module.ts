import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel.component';



const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      {
        path: '', redirectTo: 'registro', pathMatch: 'full'
      },
      {
        path: 'registro',
        loadChildren: () => import('./Registro/registro.module')
          .then(i => i.RegistroModule)
      },
      {
        path: 'subsanacion',
        loadChildren: () => import('./subsana/subsanacion.module')
          .then(u => u.SubsanacionModule)
      },
      {
        path: 'sustitucion',
        loadChildren:() => import("./sustitucion/sustitucion.module")
        .then(c => c.SustitucionModule)
      },
      {
        path: 'renuncia',
        loadChildren:() => import("./renuncia/renuncia.module")
        .then(c => c.RenunciaModule)
      },
      {
        path: 'reportes',
        loadChildren:() => import("./reportes/reportes.module")
        .then(c => c.ReportesModule)
      },
      {
        path: 'usuarios',
        loadChildren:() => import("./usuarios/usuarios.module")
        .then(c => c.UsuariosModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
