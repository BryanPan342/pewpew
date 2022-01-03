// eslint-disable-next-line import/no-unresolved
import { IGunChainReference } from 'gun/types/chain';

type DataType = Record<string, any>

export type Gun = IGunChainReference<DataType, any, 'pre_root'>


export type TGunCallback = (data: Record<string, any>) => void;