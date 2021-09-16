export interface KBeaconPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
