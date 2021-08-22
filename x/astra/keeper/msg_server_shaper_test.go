package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/romon267/astra/x/astra/types"
)

//func TestShaperMsgServerCreate(t *testing.T) {
//	keeper, ctx := setupKeeper(t)
//	srv := NewMsgServerImpl(*keeper)
//	wctx := sdk.WrapSDKContext(ctx)
//	creator := "A"
//	for i := 0; i < 5; i++ {
//		idx := fmt.Sprintf("%d", i)
//		expected := &types.MsgCreateShaper{Creator: creator, Index: idx}
//		_, err := srv.CreateShaper(wctx, expected)
//		require.NoError(t, err)
//		rst, found := keeper.GetShaper(ctx, expected.Index)
//		require.True(t, found)
//		assert.Equal(t, expected.Creator, rst.Creator)
//	}
//}

func TestShaperMsgServerUpdate(t *testing.T) {
	creator := "A"
	address := "any"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateShaper
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateShaper{Creator: creator, Address: address},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateShaper{Creator: "B", Address: address},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgUpdateShaper{Creator: creator, Address: "missing"},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			keeper, ctx := setupKeeper(t)
			srv := NewMsgServerImpl(*keeper)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateShaper{Creator: creator, Address: address}
			_, err := srv.CreateShaper(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateShaper(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := keeper.GetShaper(ctx, expected.Address)
				require.True(t, found)
				assert.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestShaperMsgServerDelete(t *testing.T) {
	creator := "A"
	address := "any"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteShaper
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteShaper{Creator: creator, Address: address},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteShaper{Creator: "B", Address: address},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteShaper{Creator: creator, Address: "missing"},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			keeper, ctx := setupKeeper(t)
			srv := NewMsgServerImpl(*keeper)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateShaper(wctx, &types.MsgCreateShaper{Creator: creator, Address: address})
			require.NoError(t, err)
			_, err = srv.DeleteShaper(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := keeper.GetShaper(ctx, tc.request.Address)
				require.False(t, found)
			}
		})
	}
}
