package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreatePlanet{}

func NewMsgCreatePlanet(creator string, name string, biome string) *MsgCreatePlanet {
	return &MsgCreatePlanet{
		Creator: creator,
		Name:    name,
		Biome:   biome,
	}
}

func (msg *MsgCreatePlanet) Route() string {
	return RouterKey
}

func (msg *MsgCreatePlanet) Type() string {
	return "CreatePlanet"
}

func (msg *MsgCreatePlanet) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePlanet) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePlanet) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
