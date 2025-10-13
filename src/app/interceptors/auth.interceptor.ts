import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token'); // o sessionStorage según tu caso

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Token ${token}` // usa "Bearer" si tu backend lo requiere
      }
    });
  }

  return next(req);
};
