import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}

export interface CustomTheme {
  primary: {
    darker: string;
    lighter: string;
  };
  secondary: {
    darker: string;
    lighter: string;
  };
  background: {
    darker: string;
    lighter: string;
    lightest: string;
  };
  warning: string;
}
