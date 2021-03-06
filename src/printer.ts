import * as chalk from 'chalk'
import { E } from '@mosteast/e'
import { render, RendererOptions } from 'prettyjson'

export function log_print(type: N_print_type, ...args: any[]) {
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
      if (it instanceof E && it.solution) {
        arr.push(it.message, ' [Solution]:', it.solution, '\n')
      }

      arr.push(it)
    } else {
      arr.push(chalk[color_map[type]](it))
    }
  }

  console[console_map[type]](...arr)
}

/**
 * Key value mapped printers, for dynamic access: `print[xxx]`
 */
export const printer: T_printer_map = {
  verbose: print_verbose,
  success: print_success,
  info: print_info,
  warn: print_warn,
  error: print_error,
  json: print_json,
  pretty: print_pretty,
}

export function print_verbose(...args: any[]) {
  log_print(N_print_type.verbose, ...args)
}

export function print_success(...args: any[]) {
  log_print(N_print_type.success, ...args)
}

export function print_info(...args: any[]) {
  log_print(N_print_type.info, ...args)
}

export function print_warn(...args: any[]) {
  log_print(N_print_type.warn, ...args)
}

export function print_error(...args: any[]) {
  log_print(N_print_type.error, ...args)
}

/**
 * Print full json
 */
export function print_json(value: any, opt?: T_opt_print_json) {
  let { space, replacer, raw } = { raw: false, ...opt }

  if ( ! space && ! replacer) {
    if (Array.isArray(value) || raw) {
      space = 0
    } else {
      space = 2
    }
  }

  console.log(JSON.stringify(value, replacer, space))
}

export function print_pretty(value, opt?: T_opt_print_pretty) {
  opt = { ...opt }
  console.log(render(value, opt.opt_render))
}

export enum N_print_type {
  verbose = 'verbose',
  success = 'success',
  info    = 'info',
  warn    = 'warn',
  error   = 'error',
}

export interface T_opt_print_json {
  replacer?: (this: any, key: string, value: any) => any
  space?: string | number
  raw?: boolean
}

export interface T_opt_print_pretty {
  opt_render?: RendererOptions
}

export interface T_printer_map {
  [key: string]: Function
}
