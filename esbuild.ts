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

esbuild
  .build({
    entryPoints: ['src/main.ts'],
    outfile: 'scripts/main.js',
    bundle: true,
    minify: true,
    format: 'esm',
    external: externalPackages,
  })
  .then(() => {
    console.log('[esbuild] build completed')
  })
  .catch((error) => {
    console.error(error)
  })
