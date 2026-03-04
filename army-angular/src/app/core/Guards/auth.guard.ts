import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { catchError, map, of } from 'rxjs';
export const authGuard: CanActivateFn = () => {

  const auth = inject(AuthService);
  const router = inject(Router);

  return auth.getProfile().pipe(

    map((res: any) => {

      if (res.user?.organisation?.toLowerCase() === 'army') {
        return true;
      }

      router.navigate(['/unauthorized']);
      return false;
    }),

    catchError(() => {
      router.navigate(['/login']);
      return of(false);
    })

  );
};
