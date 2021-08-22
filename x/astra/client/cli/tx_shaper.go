package cli

import (
	"fmt"
	"github.com/spf13/cobra"
	"strings"

	"github.com/spf13/cast"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/romon267/astra/x/astra/types"
)

func CmdCreateShaper() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-shaper [name] [address] [rank]",
		Short: "Create a new shaper",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsName, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}

			argsAddress, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			argsRank, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateShaper(clientCtx.GetFromAddress().String(), argsName, argsAddress, argsRank)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateShaper() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-shaper [name] [address] [rank] [planetIds] [starIds]",
		Short: "Update a shaper",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsName, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}

			argsAddress, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			argsRank, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}

			argsPlanetIds, err := cast.ToIntSliceE(strings.Split(args[3], ","))
			if err != nil {
				return err
			}

			argsStarsIds, err := cast.ToIntSliceE(strings.Split(args[4], ","))
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateShaper(clientCtx.GetFromAddress().String(), argsName, argsAddress, argsRank, convertTo64(argsPlanetIds), convertTo64(argsStarsIds))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateShaperPlanets() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-shaper-planets [address] [planetIds]",
		Short: "Update shaper's planets",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			address := args[0]
			argsPlanetIds, err := cast.ToIntSliceE(strings.Split(args[1], ","))
			if err != nil {
				return err
			}

			fmt.Printf("~~~~IN CMD: val: %v type: %T\n", args[1], args[1])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateShaperPlanets(clientCtx.GetFromAddress().String(), address, convertTo64(argsPlanetIds))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteShaper() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-shaper [address]",
		Short: "Delete a shaper",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			address := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteShaper(clientCtx.GetFromAddress().String(), address)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func convertTo64(ar []int) []int64 {
	fmt.Println("===IN CONVERT:", ar)
	newar := make([]int64, len(ar))
	var v int
	var i int
	for i, v = range ar {
		newar[i] = int64(v)
	}
	fmt.Println("===RETURNING:", newar)
	return newar
}
