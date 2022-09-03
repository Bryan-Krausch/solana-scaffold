import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SolanaStarter } from "../target/types/solana_starter";

describe("solana-starter", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.SolanaStarter as Program<SolanaStarter>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
