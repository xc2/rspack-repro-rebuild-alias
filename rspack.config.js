module.exports = /** @type {import('@rspack/cli').Configuration} */ ({
  mode: 'development',
  devtool: false,
  entry: './index.js',
  output: {
    clean: true,
    path: 'dist'
  },
  resolve: {
    alias: {
      '@': __dirname
    }
  }
})