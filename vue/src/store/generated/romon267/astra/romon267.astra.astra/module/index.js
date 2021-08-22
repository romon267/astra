// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateShaperPlanets } from "./types/astra/tx";
import { MsgUpdateShaper } from "./types/astra/tx";
import { MsgCreatePlanet } from "./types/astra/tx";
import { MsgCreateShaper } from "./types/astra/tx";
import { MsgDeleteShaper } from "./types/astra/tx";
const types = [
    ["/romon267.astra.astra.MsgUpdateShaperPlanets", MsgUpdateShaperPlanets],
    ["/romon267.astra.astra.MsgUpdateShaper", MsgUpdateShaper],
    ["/romon267.astra.astra.MsgCreatePlanet", MsgCreatePlanet],
    ["/romon267.astra.astra.MsgCreateShaper", MsgCreateShaper],
    ["/romon267.astra.astra.MsgDeleteShaper", MsgDeleteShaper],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgUpdateShaperPlanets: (data) => ({ typeUrl: "/romon267.astra.astra.MsgUpdateShaperPlanets", value: data }),
        msgUpdateShaper: (data) => ({ typeUrl: "/romon267.astra.astra.MsgUpdateShaper", value: data }),
        msgCreatePlanet: (data) => ({ typeUrl: "/romon267.astra.astra.MsgCreatePlanet", value: data }),
        msgCreateShaper: (data) => ({ typeUrl: "/romon267.astra.astra.MsgCreateShaper", value: data }),
        msgDeleteShaper: (data) => ({ typeUrl: "/romon267.astra.astra.MsgDeleteShaper", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
