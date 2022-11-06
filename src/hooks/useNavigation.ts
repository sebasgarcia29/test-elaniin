import { useNavigation } from '@react-navigation/native';

import type { StackNavigationProp } from '@react-navigation/stack';
import type { Params } from '../navigation/Params';

function useAppNavigation<T extends keyof Params>() {
  return useNavigation<StackNavigationProp<Params, T>>();
}

export default useAppNavigation;
