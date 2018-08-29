let defaults = {
  option: {
    remove: true,
    enable: true,
    ins: {}
  },
  log: {
    warn: true,
    error: true
  }
}

let config = {
  option: {
    remove: true,
    ins: null
  }
}

{
  let {
    option: {
      remove = defaults.option.remove,
      enable = defaults.option.enable,
      ins = defaults.option.ins
    } = {},
    log: {
      warn = defaults.log.warn,
      error = defaults.log.error
    } = {}
  } = config
  config = {
    option: { remove, enable, ins },
    log: { warn, error }
  }
  console.log(config)
}
