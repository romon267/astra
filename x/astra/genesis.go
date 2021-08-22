package astra

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/romon267/astra/x/astra/keeper"
	"github.com/romon267/astra/x/astra/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the shaper
	for _, elem := range genState.ShaperList {
		k.SetShaper(ctx, *elem)
	}

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all shaper
	shaperList := k.GetAllShaper(ctx)
	for _, elem := range shaperList {
		elem := elem
		genesis.ShaperList = append(genesis.ShaperList, &elem)
	}

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}
