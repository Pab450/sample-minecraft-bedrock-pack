import dotenv from 'dotenv'

dotenv.config()

const PACK_NAME = process.env.PACK_NAME || 'My Sample Pack'
const COM_MOJANG = process.env.COM_MOJANG || '.'

const BEHAVIOR_PACK = 'behavior_pack'
const RESOURCE_PACK = 'resource_pack'

const PACKS = [BEHAVIOR_PACK, RESOURCE_PACK]

const EXTERNAL_PACKAGES = [
  '@minecraft/server',
  '@minecraft/server-ui',
  '@minecraft/server-admin',
  '@minecraft/server-gametest',
  '@minecraft/server-net',
  '@minecraft/server-editor',
  '@minecraft/debug-utilities',
]

export {
  PACK_NAME,
  COM_MOJANG,
  BEHAVIOR_PACK,
  RESOURCE_PACK,
  PACKS,
  EXTERNAL_PACKAGES,
}
