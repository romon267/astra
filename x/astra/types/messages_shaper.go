package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateShaper{}

func NewMsgCreateShaper(creator string, name string, address string, rank string) *MsgCreateShaper {
	return &MsgCreateShaper{
		Creator: creator,
		Name:    name,
		Address: address,
		Rank:    rank,
	}
}

func (msg *MsgCreateShaper) Route() string {
	return RouterKey
}

func (msg *MsgCreateShaper) Type() string {
	return "CreateShaper"
}

func (msg *MsgCreateShaper) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateShaper) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateShaper) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateShaper{}

func NewMsgUpdateShaper(creator string, name string, address string, rank string, planetIds []int64, starIds []int64) *MsgUpdateShaper {
	return &MsgUpdateShaper{
		Creator:   creator,
		Name:      name,
		Address:   address,
		Rank:      rank,
		PlanetIds: planetIds,
		StarIds:   starIds,
	}
}

func (msg *MsgUpdateShaper) Route() string {
	return RouterKey
}

func (msg *MsgUpdateShaper) Type() string {
	return "UpdateShaper"
}

func (msg *MsgUpdateShaper) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateShaper) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateShaper) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateShaperPlanets{}

func NewMsgUpdateShaperPlanets(creator string, address string, planetIds []int64) *MsgUpdateShaperPlanets {
	return &MsgUpdateShaperPlanets{
		Creator:   creator,
		Address:   address,
		PlanetIds: planetIds,
	}
}

func (msg *MsgUpdateShaperPlanets) Route() string {
	return RouterKey
}

func (msg *MsgUpdateShaperPlanets) Type() string {
	return "UpdateShaperPlanets"
}

func (msg *MsgUpdateShaperPlanets) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateShaperPlanets) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateShaperPlanets) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteShaper{}

func NewMsgDeleteShaper(creator string, address string) *MsgDeleteShaper {
	return &MsgDeleteShaper{
		Creator: creator,
		Address: address,
	}
}
func (msg *MsgDeleteShaper) Route() string {
	return RouterKey
}

func (msg *MsgDeleteShaper) Type() string {
	return "DeleteShaper"
}

func (msg *MsgDeleteShaper) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteShaper) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteShaper) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
