# Meme.land - A Gno Meme Sharing Platform

**Meme.land** is a meme (funny internet image) sharing platform built on top 
of the Gno.land blockchain tech stack.

Meme.land allows you to connect with your Gno.land wallet, share memes with your 
friends and coworkers, and upvote the funniest ones.

Built using the [Gno.land](https://github.com/gnolang/gno) tech stack, Meme.land utilizes the Gno programming
language for its backend, and a classic React UI using `vite`.

## Run Meme.land locally

Meme.land consists of a React frontend, and a Gno backend (smart contract).
The frontend and backend code can be found at `ui/` and `api/` respectively.

## Prerequisites
- NodeJS
- Yarn
- Go 1.21+
- [Gno tech stack](https://docs.gno.land/getting-started/local-setup)

#### 1. Clone the Meme.land repo

```bash
git clone git@github.com:gnolang/memeland.git 
```

#### 2. Set up environment variables

Create a `.env` file in the root of the repo following the template found in 
`.env.example`.

To do this, your `.env` file should contain the following:

```bash
VITE_CHAIN_ID=<gno-chain-id>
VITE_CHAIN_RPC=<gno-chain-rpc>
VITE_REALM_PATH=<onchain-path-to-memeland-realm>
```

### 4. Set up a local development node with `gnodev`

`gnodev` is a tool that allows you to run a local Gno.land node effortlessly.
To get started, install `gnodev`. To do this, clone the Gno monorepo:

```bash
git clone git@github.com:gnolang/gno.git 
```

From the root of the Gno repo, install the all the necessary binaries and 
tools following the next steps:

1. Install the `gno` & `gnodev` binaries with the following command in the root of the cloned monorepo:
```bash
make install
```

2. Run the `gnodev` binary in the memeland repo, giving it paths
to the package and realm:
```bash
gnodev ./api/p/memeland ./api/r/memeland
```

Running this command will spin up a local node that the Meme.land UI 
will be able to connect to.

Make sure that the chain RPC endpoint that `gnodev` is running on matches the one
in the `.env` file.

#### 3. Start the frontend with `vite`

Start by running `yarn` in the `ui/` folder. After `yarn` has installed all of 
the dependencies, run `yarn dev`.

### Conclusion

Congratulations! You are now officially running a local frontend connected to 
Meme.land!





