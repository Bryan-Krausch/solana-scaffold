use anchor_lang::prelude::*;

declare_id!("A7HBry8TeHZqgQ8cMeZwVTsE336gwSMGgV75MU6MMb5r");

#[program]
pub mod solana_starter {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
