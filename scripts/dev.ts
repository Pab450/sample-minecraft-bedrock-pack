import esbuild from './esbuild'
import { PACKS, PACK_NAME, COM_MOJANG } from './constants'
import fs from 'node:fs/promises'
import path from 'node:path'

esbuild()
  .then(() => {
    for (const pack of PACKS) {
      fs.cp(
        path.join('.', pack),
        path.join(COM_MOJANG, `development_${pack}s`, PACK_NAME),
        {
          recursive: true,
          force: true,
        }
      )
    }
  })
  .catch((error) => {
    console.error(error)
  })
