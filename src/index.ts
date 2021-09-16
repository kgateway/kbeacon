import { registerPlugin } from '@capacitor/core';

import type { KBeaconPlugin } from './definitions';

const KBeacon = registerPlugin<KBeaconPlugin>('KBeacon', {
  web: () => import('./web').then(m => new m.KBeaconWeb()),
});

export * from './definitions';
export { KBeacon };
