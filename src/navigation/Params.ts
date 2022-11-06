import type { PageName } from './PageName';

export type Params = {
  [PageName.HomeScreen]: undefined;
  [PageName.LoginScreen]: undefined;
  [PageName.PokemonScreen]: undefined;
};

// Add Params to React Navigation namespace to be able to get it from anywhere
declare global {
  namespace ReactNavigation {
    interface RootParamList extends Params {}
  }
}
