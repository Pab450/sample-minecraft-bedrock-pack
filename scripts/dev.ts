import build from './build'
import dotenv from 'dotenv'
import fs from 'node:fs/promises'

dotenv.config()

const { COM_MOJANG, PACK_NAME } = process.env

const packs = ['behavior_pack', 'resource_pack']

build()
  .then(() => {
    for (const pack of packs) {
      fs.cp(`./${pack}`, `${COM_MOJANG}/development_${pack}s/${PACK_NAME}`, {
        recursive: true,
        force: true,
      })
    }
  })
  .catch((error) => {
    console.error(error)
  })
