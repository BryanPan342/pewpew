import Gun from 'gun';
import { Gun as TGun} from './Gun';

let client: PPClient | null;

export function getClient(): PPClient {
  if (!client) {
    client = new PPClient(
      ...process.env.SERVERS
        .split(',')
        .filter(Boolean),
    );
  }
  return client;
}

export class PPClient {

  public readonly gun: TGun;

  constructor(...servers: string[]) {
    this.gun = Gun({
      peers: servers,
    });
  }
}