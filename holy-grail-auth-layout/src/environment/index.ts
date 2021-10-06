import development from "environment/development";
import production from "environment/production";

interface Env {
  [key: string]: {
    API_URL: string;
    RECAPTCHA_SITE_KEY: string;
  };
}

const environments: Env = {
  development,
  production,
};

const { REACT_APP_ENV = "development" } = process.env;

export default {
  REACT_APP_ENV,
  ...environments[REACT_APP_ENV],
};
