import * as BabelTypes from '@babel/types'
import { PluginObj } from '@babel/core'

export interface Babel {
  types: typeof BabelTypes
}

export default function (babel: Babel): PluginObj {
  const t = babel.types
  return {
    visitor: {
      BinaryExpression(path) {
        if (path.node.operator !== '===') {
          return
        }
        path.node.left = t.identifier('human')
        path.node.right = t.identifier('dork')
      }
    }
  }
}
