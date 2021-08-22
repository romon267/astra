package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/romon267/astra/x/astra/types"
)

func (k msgServer) CreateShaper(goCtx context.Context, msg *types.MsgCreateShaper) (*types.MsgCreateShaperResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetShaper(ctx, msg.Address)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, fmt.Sprintf("address %v already set", msg.Address))
	}

	var shaper = types.Shaper{
		Creator: msg.Creator,
		Name:    msg.Name,
		Address: msg.Address,
		Rank:    msg.Rank,
	}

	k.SetShaper(
		ctx,
		shaper,
	)
	return &types.MsgCreateShaperResponse{}, nil
}

func (k msgServer) UpdateShaperPlanets(goCtx context.Context, msg *types.MsgUpdateShaperPlanets) (*types.MsgUpdateShaperPlanetsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetShaper(ctx, msg.Address)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("address %v not set", msg.Address))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}
	fmt.Println("IN MSG SERVER, PLANET IDS:", msg.PlanetIds)
	// Updating only planet ids
	var shaper = types.Shaper{
		Creator:   valFound.Creator,
		Name:      valFound.Name,
		Address:   valFound.Address,
		Rank:      valFound.Rank,
		PlanetIds: msg.PlanetIds,
		StarIds:   valFound.StarIds,
	}

	k.SetShaper(ctx, shaper)

	return &types.MsgUpdateShaperPlanetsResponse{}, nil
}

func (k msgServer) UpdateShaper(goCtx context.Context, msg *types.MsgUpdateShaper) (*types.MsgUpdateShaperResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetShaper(ctx, msg.Address)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("address %v not set", msg.Address))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var shaper = types.Shaper{
		Creator:   msg.Creator,
		Name:      msg.Name,
		Address:   msg.Address,
		Rank:      msg.Rank,
		PlanetIds: msg.PlanetIds,
		StarIds:   msg.StarIds,
	}

	k.SetShaper(ctx, shaper)

	return &types.MsgUpdateShaperResponse{}, nil
}

func (k msgServer) DeleteShaper(goCtx context.Context, msg *types.MsgDeleteShaper) (*types.MsgDeleteShaperResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetShaper(ctx, msg.Address)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("address %v not set", msg.Address))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveShaper(ctx, msg.Address)

	return &types.MsgDeleteShaperResponse{}, nil
}
