import esbuild from './esbuild'
import { createWriteStream } from 'node:fs'
import { PACK_NAME, PACKS } from './constants'
import path from 'node:path'
import archiver from 'archiver'

esbuild()
  .then(() => {
    const writeStream = createWriteStream(
      path.join('.', 'dist', `${PACK_NAME}.mcaddon`)
    )
    const archive = archiver('zip', {
      zlib: { level: 9 },
    })

    archive.pipe(writeStream)

    for (const pack of PACKS) {
      archive.directory(path.join('.', pack), pack)
    }

    archive.finalize()
  })
  .catch((error) => {
    console.error(error)
  })
