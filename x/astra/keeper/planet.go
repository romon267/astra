package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/romon267/astra/x/astra/types"
	"strconv"
)

func (k Keeper) GetAllPlanets(ctx sdk.Context) (planets []types.Planet) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PlanetKey))
	iterator := sdk.KVStorePrefixIterator(store, types.KeyPrefix(types.PlanetKey))

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var planet types.Planet
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &planet)
		planets = append(planets, planet)
	}

	return
}

func (k Keeper) CreatePlanet(ctx sdk.Context, msg types.MsgCreatePlanet) {
	count := k.GetPlanetCount(ctx)

	planet := types.Planet{
		Id:      strconv.FormatInt(count, 10),
		Creator: msg.Creator,
		Name:    msg.Name,
		Biome:   msg.Biome,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PlanetKey))
	key := types.KeyPrefix(types.PlanetKey + planet.Id)
	value := k.cdc.MustMarshalBinaryBare(&planet)
	store.Set(key, value)

	k.SetPlanetCount(ctx, count+1)
}

func (k Keeper) GetPlanet(ctx sdk.Context, key string) types.Planet {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PlanetKey))
	var planet types.Planet
	k.cdc.MustUnmarshalBinaryBare(store.Get(types.KeyPrefix(types.PlanetKey+key)), &planet)
	return planet
}

func (k Keeper) HasPlanet(ctx sdk.Context, id string) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PlanetKey))
	return store.Has(types.KeyPrefix(types.PlanetKey + id))
}

func (k Keeper) GetPlanetCount(ctx sdk.Context) int64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PlanetCountKey))
	byteKey := types.KeyPrefix(types.PlanetCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		// returns 1 to set first planet id to 1
		return 1
	}

	// Parse bytes
	count, err := strconv.ParseInt(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to int64
		panic("cannot decode count")
	}

	return count
}

func (k Keeper) SetPlanetCount(ctx sdk.Context, count int64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PlanetCountKey))
	byteKey := types.KeyPrefix(types.PlanetCountKey)
	bz := []byte(strconv.FormatInt(count, 10))
	store.Set(byteKey, bz)
}
