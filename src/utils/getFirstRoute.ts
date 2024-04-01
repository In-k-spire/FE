export const GetFirstRoute = (routeString: string): string =>  {
  const routes: string[] = routeString.split("/");
  return routes[1];
}

