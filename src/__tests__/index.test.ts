import * as babel from '@babel/core'
import plugin from '../'

const example = `
var foo = 1;
if (foo) console.log(foo);
`

const example2 = `
hoge === fuga;
`

it('works', () => {
  const result = babel.transform(example, { plugins: [plugin] })
  expect(result?.code).toMatchSnapshot()
})

it('works2', () => {
  const result = babel.transform(example2, { plugins: [plugin] })
  expect(result?.code).toMatchSnapshot()
})
