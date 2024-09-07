import { RootState,  } from '@/common/store/store';
import type { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';

export const useAuthSelector: TypedUseSelectorHook<RootState> = useSelector;