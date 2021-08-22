package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/romon267/astra/x/astra/types"
)

// SetShaper set a specific shaper in the store from its index
func (k Keeper) SetShaper(ctx sdk.Context, shaper types.Shaper) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ShaperKey))
	b := k.cdc.MustMarshalBinaryBare(&shaper)
	store.Set(types.KeyPrefix(shaper.Address), b)
}

// GetShaper returns a shaper from its index
func (k Keeper) GetShaper(ctx sdk.Context, index string) (val types.Shaper, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ShaperKey))

	b := store.Get(types.KeyPrefix(index))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshalBinaryBare(b, &val)
	return val, true
}

// RemoveShaper removes a shaper from the store
func (k Keeper) RemoveShaper(ctx sdk.Context, index string) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ShaperKey))
	store.Delete(types.KeyPrefix(index))
}

// GetAllShaper returns all shaper
func (k Keeper) GetAllShaper(ctx sdk.Context) (list []types.Shaper) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ShaperKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Shaper
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
