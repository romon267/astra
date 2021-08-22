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

func (k Keeper) ShaperAll(c context.Context, req *types.QueryAllShaperRequest) (*types.QueryAllShaperResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var shapers []*types.Shaper
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	shaperStore := prefix.NewStore(store, types.KeyPrefix(types.ShaperKey))

	pageRes, err := query.Paginate(shaperStore, req.Pagination, func(key []byte, value []byte) error {
		var shaper types.Shaper
		if err := k.cdc.UnmarshalBinaryBare(value, &shaper); err != nil {
			return err
		}

		shapers = append(shapers, &shaper)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllShaperResponse{Shaper: shapers, Pagination: pageRes}, nil
}

func (k Keeper) Shaper(c context.Context, req *types.QueryGetShaperRequest) (*types.QueryGetShaperResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetShaper(ctx, req.Address)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetShaperResponse{Shaper: &val}, nil
}
