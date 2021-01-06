import { createSelector } from '@ngrx/store';
import { CurrentSmokingState } from '../interfaces/state.interface';

export const selectCurrentPack = (state: CurrentSmokingState) => state;
