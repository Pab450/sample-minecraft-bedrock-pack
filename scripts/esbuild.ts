import esbuild from 'esbuild'
import path from 'node:path'
import { EXTERNAL_PACKAGES, BEHAVIOR_PACK } from './constants'

export default () =>
  esbuild
    .build({
      entryPoints: [path.join('.', 'src', 'main.ts')],
      outfile: path.join('.', BEHAVIOR_PACK, 'scripts', 'main.js'),
      minify: true,
      format: 'esm',
      bundle: true,
      external: EXTERNAL_PACKAGES,
    })
    .catch((error) => {
      console.error(error)
    })
