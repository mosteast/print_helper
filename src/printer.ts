import * as chalk from 'chalk'

export function print(type: N_print_type, ...args: any[]) {
  const arr = []
  const color_map = {
    verbose: 'gray',
    success: 'green',
    info: 'blue',
    warn: 'yellow',
    error: 'red',
  }

  const console_map = {
    verbose: 'log',
    success: 'info',
    info: 'info',
    warn: 'warn',
    error: 'error',
  }

  for (let it of args) {
    if (typeof it === 'object') {
      arr.push(it)
    } else {
      arr.push(chalk[color_map[type]](it))
    }
  }

  console[console_map[type]](...arr)
}

export function print_verbose(...args: any[]) {
  print(N_print_type.verbose, ...args)
}

export function print_success(...args: any[]) {
  print(N_print_type.success, ...args)
}

export function print_info(...args: any[]) {
  print(N_print_type.info, ...args)
}

export function print_warn(...args: any[]) {
  print(N_print_type.warn, ...args)
}

export function print_error(...args: any[]) {
  print(N_print_type.error, ...args)
}

export enum N_print_type {
  verbose = 'verbose',
  success = 'success',
  info    = 'info',
  warn    = 'warn',
  error   = 'error',
}
