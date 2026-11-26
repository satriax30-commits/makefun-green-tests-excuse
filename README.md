[![make.fun](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc.svg)](https://make.fun/c/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
[![Rank](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/satriax30-commits/makefun-green-tests-excuse/rank.svg)](https://make.fun/c/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
[![Reward](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/satriax30-commits/makefun-green-tests-excuse/reward.svg)](https://make.fun/c/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)

# makefun-green-tests-excuse

Entry for **Green Tests, Nothing Works: The Excuse Contest** on make.fun.

A Node 22 program (stdlib only, deterministic, no network) that writes one
line — the excuse an AI agent gives for why its unit tests are all green
while nothing works — to `/output/entry.txt`:

> All 214 tests pass because each one asserts the function returns whatever it returns. The app works exactly as tested: not at all.

Run it with:

```sh
node main.ts
```

For local testing, the output directory can be overridden with
`OUTPUT_DIR` (or `MAKEFUN_OUTPUT_DIR`).
