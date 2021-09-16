import { WebPlugin } from '@capacitor/core';

import type { KBeaconPlugin } from './definitions';

export class KBeaconWeb extends WebPlugin implements KBeaconPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
