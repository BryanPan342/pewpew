import Gun from 'gun';
import { IGunChainReference } from 'gun/types/chain';
import { Gun as TGun, TGunCallback} from './Gun';

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

export enum COLLECTIONS {
  TEXT='text',
}

export class PPClient {

  public readonly gun: TGun;

  constructor(...servers: string[]) {
    this.gun = Gun({
      peers: servers,
    });
  }

  public open(collection: COLLECTIONS) {
    return this.gun.get(collection);
  }

  public mount(collection: COLLECTIONS, cb: TGunCallback) {
    this.open(collection).once(cb);
  }

  public listen(collection: COLLECTIONS, cb: TGunCallback) {
    this.open(collection).on(cb);
  }

  public put(collection: COLLECTIONS, data: Record<string, any>) {
    this.open(collection).put(data);
  }
}