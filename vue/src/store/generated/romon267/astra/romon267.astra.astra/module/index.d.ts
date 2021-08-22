import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateShaperPlanets } from "./types/astra/tx";
import { MsgUpdateShaper } from "./types/astra/tx";
import { MsgCreatePlanet } from "./types/astra/tx";
import { MsgCreateShaper } from "./types/astra/tx";
import { MsgDeleteShaper } from "./types/astra/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgUpdateShaperPlanets: (data: MsgUpdateShaperPlanets) => EncodeObject;
    msgUpdateShaper: (data: MsgUpdateShaper) => EncodeObject;
    msgCreatePlanet: (data: MsgCreatePlanet) => EncodeObject;
    msgCreateShaper: (data: MsgCreateShaper) => EncodeObject;
    msgDeleteShaper: (data: MsgDeleteShaper) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
