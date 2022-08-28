import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const user = request.headers.user;
        const userRole = request.headers.userrole;
        /*return matchRoles(roles, user.roles);
        return user.roles.includes(roles)

        const hasRole = () => !!user.roles.find(role => !!roles.find(item => item === role));
        */

        console.log(`User Name -> ${user}\nUser Role -> ${userRole}\nRequired Role -> ${roles}\n`);
        
        return userRole.includes(roles)

    }
}