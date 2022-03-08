# Paketo NPM Example

This example shows that node modules are not installed if `package.json` is present but does not include a `start` script.

## How to run

1. Checkout repo
2. `cd` into directory
3. Run `pack build paketo-npm-test --path . --builder paketobuildpacks/builder:full` to build image
4. Start container with `docker run paketo-npm-test`

## Example output

Build

```
full: Pulling from paketobuildpacks/builder
Digest: sha256:f73524c65187e13504e2d8f02fb00666be568f69f71afbf8d1df149664b49193
Status: Image is up to date for paketobuildpacks/builder:full
full-cnb: Pulling from paketobuildpacks/run
Digest: sha256:07ececf7c48e2e451812ceea9262d00474433f6517bc48550ecbc2aac0e4a602
Status: Image is up to date for paketobuildpacks/run:full-cnb
===> ANALYZING
===> DETECTING
3 of 8 buildpacks participating
paketo-buildpacks/ca-certificates 3.0.3
paketo-buildpacks/node-engine     0.12.1
paketo-buildpacks/node-start      0.7.1
===> RESTORING
Restoring metadata for "paketo-buildpacks/ca-certificates:helper" from app image
Restoring metadata for "paketo-buildpacks/node-engine:node" from app image
Restoring data for "paketo-buildpacks/node-engine:node" from cache
===> BUILDING

Paketo CA Certificates Buildpack 3.0.3
  https://github.com/paketo-buildpacks/ca-certificates
  Launch Helper: Reusing cached layer
Warning: BOM table is deprecated in this buildpack api version, though it remains supported for backwards compatibility. Buildpack authors should write BOM information to <layer>.sbom.<ext>, launch.sbom.<ext>, or build.sbom.<ext>.
Paketo Node Engine Buildpack 0.12.1
  Resolving Node Engine version
    Candidate version sources (in priority order):
      <unknown> -> ""

    Selected Node Engine version (using <unknown>): 16.14.0

  Reusing cached layer /layers/paketo-buildpacks_node-engine/node

Warning: BOM table is deprecated in this buildpack api version, though it remains supported for backwards compatibility. Buildpack authors should write BOM information to <layer>.sbom.<ext>, launch.sbom.<ext>, or build.sbom.<ext>.
Paketo Node Start Buildpack 0.7.1
  Assigning launch processes:
    web (default): node index.js

===> EXPORTING
Reusing layer 'paketo-buildpacks/ca-certificates:helper'
Reusing layer 'paketo-buildpacks/node-engine:node'
```

Start

```
node:internal/modules/cjs/loader:936
  throw err;
  ^

Error: Cannot find module 'fastify'
Require stack:
- /workspace/index.js
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
    at Function.Module._load (node:internal/modules/cjs/loader:778:27)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (/workspace/index.js:1:17)
    at Module._compile (node:internal/modules/cjs/loader:1103:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1155:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ '/workspace/index.js' ]
}
```
