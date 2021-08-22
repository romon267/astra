package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgCreateShaper{}, "astra/CreateShaper", nil)
	cdc.RegisterConcrete(&MsgUpdateShaper{}, "astra/UpdateShaper", nil)
	cdc.RegisterConcrete(&MsgUpdateShaperPlanets{}, "astra/UpdateShaperPlanets", nil)
	cdc.RegisterConcrete(&MsgDeleteShaper{}, "astra/DeleteShaper", nil)

	cdc.RegisterConcrete(&MsgCreatePlanet{}, "astra/CreatePlanet", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateShaper{},
		&MsgUpdateShaper{},
		&MsgUpdateShaperPlanets{},
		&MsgDeleteShaper{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePlanet{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
