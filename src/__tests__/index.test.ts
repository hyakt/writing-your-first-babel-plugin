import * as babel from '@babel/core'
import plugin from '../'

var example = `
var foo = 1;
if (foo) console.log(foo);
`

it('works', () => {
  const result = babel.transform(example, { plugins: [plugin] })
  expect(result?.code).toMatchSnapshot()
})
