import { getManifest, loadRemoteModule } from "@angular-architects/module-federation";
import { Routes } from "@angular/router";
import { routes } from "../app/app-routing.module";
import { CustomManifest } from "./mf.model";


export function buildRoutes(): Routes {
    const lazyRoutes = Object.entries(getManifest<CustomManifest>())
        .filter(([key, value]) => {
            return value.viaRoute === true
        })
        .map(([key, value]) => {
            return {
                path: value.routePath,
                loadChildren: () => loadRemoteModule({
                    type: 'manifest',
                    remoteName: key,
                    exposedModule: value.exposedModule
                }).then(m => m[value.ngModuleName!])
            }
        });

    const notFound = [
        {
            path: '**',
            redirectTo: ''
        }]

    // { path:'**', ...} needs to be the LAST one.

    return [...routes, ...lazyRoutes, ...notFound]
}
