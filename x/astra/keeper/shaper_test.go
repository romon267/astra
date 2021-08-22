package keeper

import (
	"fmt"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"

	"github.com/romon267/astra/x/astra/types"
)

func createNShaper(keeper *Keeper, ctx sdk.Context, n int) []types.Shaper {
	items := make([]types.Shaper, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Index = fmt.Sprintf("%d", i)
		keeper.SetShaper(ctx, items[i])
	}
	return items
}

func TestShaperGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNShaper(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetShaper(ctx, item.Index)
		assert.True(t, found)
		assert.Equal(t, item, rst)
	}
}
func TestShaperRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNShaper(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveShaper(ctx, item.Index)
		_, found := keeper.GetShaper(ctx, item.Index)
		assert.False(t, found)
	}
}

func TestShaperGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNShaper(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllShaper(ctx))
}
