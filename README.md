# solana-scaffold

# 1- Install rust 

`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`

Check if rust is installed 

`rustup --version`
`rustc --version`
`cargo --version`

# 2- Install Solana

`sh -c "$(curl -sSfL https://release.solana.com/v1.9.4/install)"`

Check if Solana is installed

`solana --version`
`solana-test-validator`

# 3- Set solana environnement 

`solana config set --url localhost`

# Generate your local Keypair

`solana-keygen new`

# 4- Install Anchor

`cargo install --git https://github.com/project-serum/anchor anchor-cli --locked`

Check if anchor is installed

`anchor --version`

Update Program ID :

`solana address -k target/deploy/solana_twitter-keypair.json`

In anchor.toml replace this : 

`[programs.localnet]
solana_twitter = "Your newly created address"`

In lib.rs replace this

`declare_id!("Your newly created address");`

# 5- Build and Deploy : 
`anchor build
anchor deploy`
