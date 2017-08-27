export interface Figure {
  readonly id: string;
  readonly prone: boolean;
  readonly special: Special;
}

export type Special = 'nature' | 'udon' | '';

export interface Operation {
  readonly figureId: string;
  readonly actions: Action[];
}

export type Action = 'flip' | 'attach';
