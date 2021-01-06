import { createAction, props } from '@ngrx/store';

export const createPack = createAction(
  "[Current Smoking] Create Pack",
  props<{ name: string; count: number }>()
);
