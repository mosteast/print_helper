import {
  print_error,
  print_info,
  print_success,
  print_verbose,
  print_warn,
} from './printer'
import { E } from '@mosteast/e'

it('prints color', async () => {
  print_verbose('verbose')
  print_success('success')
  print_info('info')
  print_warn('warn')
  print_error('error')
})

it('Can concat solution to error message', async () => {
  print_error(new E('a', 'b'))
})
