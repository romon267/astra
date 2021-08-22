package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/romon267/astra/x/astra/types"
)

func (k msgServer) CreatePlanet(goCtx context.Context, msg *types.MsgCreatePlanet) (*types.MsgCreatePlanetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	k.Keeper.CreatePlanet(ctx, *msg)

	return &types.MsgCreatePlanetResponse{}, nil
}
