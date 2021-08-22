package keeper

import (
	"context"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/romon267/astra/x/astra/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Planet(goCtx context.Context, req *types.QueryGetPlanetRequest) (*types.QueryGetPlanetResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	planet := k.GetPlanet(sdk.UnwrapSDKContext(goCtx), req.Id)

	return &types.QueryGetPlanetResponse{
		Planet: &planet,
	}, nil
}

func (k Keeper) PlanetAll(goCtx context.Context, req *types.QueryAllPlanetRequest) (*types.QueryAllPlanetResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var planets []*types.Planet
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	planetStore := prefix.NewStore(store, types.KeyPrefix(types.PlanetKey))

	pageRes, err := query.Paginate(planetStore, req.Pagination, func(key []byte, value []byte) error {
		var planet types.Planet
		if err := k.cdc.UnmarshalBinaryBare(value, &planet); err != nil {
			return err
		}

		planets = append(planets, &planet)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPlanetResponse{Planets: planets, Pagination: pageRes}, nil
}
