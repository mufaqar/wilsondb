import * as migration_20250710_135302 from './20250710_135302';

export const migrations = [
  {
    up: migration_20250710_135302.up,
    down: migration_20250710_135302.down,
    name: '20250710_135302'
  },
];
