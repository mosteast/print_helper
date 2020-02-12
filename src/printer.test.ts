import {
  print_error,
  print_info, print_json, print_pretty,
  print_success,
  print_verbose,
  print_warn,
  print,
} from './printer'
import { E } from '@mosteast/e'

it('prints color', async () => {
  print_verbose('verbose')
  print_success('success')
  print_info('info')
  print_warn('warn')
  print_error('error')
})

it('prints json', async () => {
  print_json(1)
  print_json({ a: { b: { c: 1 } } })
  print_json({ a: { b: { c: 1 } } }, { raw: true })
  print_json({ a: { b: { c: 1 } } }, { space: 0 })
  print_json([ 1, 2, [ 1, 2, [ 1, 2, 3 ] ] ])
  print_json([ 1, 2, [ 1, 2, [ 1, 2, 3 ] ] ], { space: 0 })
})

it('print_pretty', async () => {
  print_pretty(1)
  print_pretty('a')
  print_pretty([ 1, 2, 3, [ 1, 2, 3 ] ])
  print_pretty({ a: { b: { c: 1 } } })
})

it('dynamic access', async () => {
  const val = { a: { b: { c: [ 1, 2, 3 ] } } }
  for (let key in print) {
    print[key](val)
  }
})

it('Can concat solution to error message', async () => {
  print_error(new E('a', 'b'))
})
