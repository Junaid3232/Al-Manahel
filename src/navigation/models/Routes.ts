type ScreensWithoutParams =
  | 'auth'
  | 'company-code'
  | 'login-screen'
  | 'home-screen'
  | 'check-in-out-screen'
  | 'home'
  | 'terms-screen'
  | 'setting';

interface ScreensWithParams {
  'send-checkin-screen': {image: any; type: number; locationId: number};
  'code-verify-screen': {
    employeeNo: number | undefined;
    phoneNo: number | undefined;
  };
  'camera-screen': {type: number; locationId: number};
  //   'home-screen': { id: string; alt: boolean };
}

export type Routes = keyof ScreensWithParams | ScreensWithoutParams;
export type RouteParam<K extends Routes | undefined = undefined> =
  K extends keyof ScreensWithParams ? ScreensWithParams[K] : undefined;
export type RouteParams = {[K in Routes]: RouteParam<K>};
export type RoutesRecord = Record<Routes, RouteParams>;
