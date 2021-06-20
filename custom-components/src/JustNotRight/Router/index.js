import { Switch, Route, NavLink } from "react-router-dom";

const GenericPage = ({ title }) => {
  return (
    <div>
      <h1 className="font-bold">{title}</h1>
    </div>
  );
};

const routes = [
  {
    name: "Dumb Menu",
    isDumb: true,
  },
  {
    path: "/",
    name: "Home",
    exact: true,
    component: <GenericPage title="Home Page" />,
  },
  {
    path: "/public",
    name: "Public",
    component: <GenericPage title="Public Page" />,
  },
  {
    path: "/private",
    name: "Private",
    component: <GenericPage title="Private Page" />,
  },
];

const NavTab = ({ name, path, exact, isDumb }) => {
  const className = "h-full hover:text-blue-200";

  if (isDumb)
    return (
      <button
        className={`${className} appearance-none focus:outline-none display-inline m-0 p-0 cursor-pointer`}
      >
        {name}
      </button>
    );
  return (
    <NavLink
      to={path}
      exact={exact}
      className={className}
      activeClassName="border-b-2 text-blue-700 border-blue-700"
    >
      {name}
    </NavLink>
  );
};

const NavTabs = () => {
  return (
    <nav className="h-10 space-x-4">
      {routes.map(({ name, path, exact, isDumb }) => (
        <NavTab
          key={name}
          name={name}
          exact={exact}
          path={path}
          isDumb={isDumb}
        />
      ))}
    </nav>
  );
};

const PageRouter = () => {
  const pageRoutes = routes.filter(({ path }) => path);
  return (
    <Switch>
      {pageRoutes.map((route) => (
        <Route key={route.name} exact={route.exact} path={route.path}>
          {route.component}
        </Route>
      ))}
    </Switch>
  );
};

export const Router = () => {
  return (
    <div>
      <NavTabs />
      <PageRouter />
    </div>
  );
};
