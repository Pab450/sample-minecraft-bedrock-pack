import { system, world } from '@minecraft/server'

world.afterEvents.playerJoin.subscribe(() =>
  system.runTimeout(() => world.sendMessage('hello world'), 20 * 5)
)
