import build from './build'
import dotenv from 'dotenv'
import { createWriteStream } from 'node:fs'
import archiver from 'archiver'

dotenv.config()

const { PACK_NAME } = process.env

build()
  .then(() => {
    const writeStream = createWriteStream(`./dist/${PACK_NAME}.mcaddon`)
    const zipper = archiver('zip', {
      zlib: { level: 9 },
    })

    zipper.pipe(writeStream)
    zipper.directory('./behavior_pack/', 'behavior_pack')
    zipper.directory('./resource_pack/', 'resource_pack')
    zipper.finalize()
  })
  .catch((error) => {
    console.error(error)
  })
