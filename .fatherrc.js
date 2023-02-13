export default {
  entry: 'src/index.ts',
  cjs: {type: 'babel', file: 'lib/cli'},
  esm: {type: 'babel', file: 'es/cli'},
}