const Worker = require(`jest-worker`).default
const { cpuCoreCount } = require(`gatsby-core-utils`)

const create = () =>
  new Worker(require.resolve(`./child`), {
    numWorkers: cpuCoreCount(true),
    forkOptions: {
      silent: false,
    },
  })

module.exports = {
  create,
}
