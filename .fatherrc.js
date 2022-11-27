export default {
  entry: 'src/index.ts',
  cjs: {type: 'babel', file: 'lib/cli'},
  doc: {
    themeConfig: { mode: 'dark' },
    base: '/your-repo'
  },
}