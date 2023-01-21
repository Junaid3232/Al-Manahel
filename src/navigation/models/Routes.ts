type ScreensWithoutParams =
  | 'auth'
  | 'company-code'
  | 'login-screen'
  | 'code-verify-screen'
  | 'home-screen'
  |'check-in-out-screen'
  |'home'
  | 'camera-screen'
  | 'setting';

interface ScreensWithParams {
  'send-checkin-screen':{image:any}
  //   'home-screen': { id: string; alt: boolean };
}

export type Routes = keyof ScreensWithParams | ScreensWithoutParams;
export type RouteParam<K extends Routes | undefined = undefined> =
  K extends keyof ScreensWithParams ? ScreensWithParams[K] : undefined;
export type RouteParams = {[K in Routes]: RouteParam<K>};
export type RoutesRecord = Record<Routes, RouteParams>;
