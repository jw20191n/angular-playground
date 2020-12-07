import { Route } from "@angular/compiler/src/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterState, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

//an interface is a contract which can be imported by some
//other class which forces this class to provide some logic

//note: this interface it won't contain any actual logic
//it would only contains information how it should look like
export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

//it would wrap the interface above, which would force 
//some component to implement the CanComponentDeactivate method
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{
    //this would be called when we try to leave a route
    //it takes in the component we are currently on as an argument
    //this component needs to be of type CanComponentDeactivate
    //in other words, this component has the interface CanComponentDeactivate implemented
    //so it could have the "canDeactivate" method

    //nextState - where you want to go
    canDeactivate(component: CanComponentDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currrentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return component.canDeactivate();
    }
}