import esbuild from 'esbuild'

const externalPackages: string[] = [
  '@minecraft/server',
  '@minecraft/server-ui',
  '@minecraft/server-admin',
  '@minecraft/server-gametest',
  '@minecraft/server-net',
  '@minecraft/server-editor',
  '@minecraft/debug-utilities',
]

export default () =>
  esbuild
    .build({
      entryPoints: ['src/main.ts'],
      outfile: 'behavior_pack/scripts/main.js',
      bundle: true,
      minify: true,
      format: 'esm',
      external: externalPackages,
    })
    .catch((error) => {
      console.error(error)
    })
