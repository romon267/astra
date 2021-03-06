package types

import (
	"fmt"
	// this line is used by starport scaffolding # ibc/genesistype/import
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		// this line is used by starport scaffolding # ibc/genesistype/default
		// this line is used by starport scaffolding # genesis/types/default
		ShaperList: []*Shaper{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # ibc/genesistype/validate

	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated address in shaper
	shaperAddressMap := make(map[string]bool)

	for _, s := range gs.ShaperList {
		if _, ok := shaperAddressMap[s.Address]; ok {
			return fmt.Errorf("duplicated index for shaper")
		}
		shaperAddressMap[s.Address] = true
	}

	return nil
}
