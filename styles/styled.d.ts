// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    bp: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tabletS: string;
      tabletL: string;
      desktopXS: string;
      desktopS: string;
      desktopM: string;
      desktopL: string;
    };
    colors: {
      darkNavy: string;
      navy: string;
      lightNavy: string;
      lightestNavy: string;
      navyShadow: string;
      darkSlate: string;
      slate: string;
      lightSlate: string;
      lightestSlate: string;
      white: string;
      green: string;
      greenTint: string;
      pink: string;
      blue: string;
    };
    fs: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    mixins: {
      flexCenter: FlattenSimpleInterpolation;
    };
  }
}
