const path = require('path')
const { promisify } = require('util')
const fs = require('fs')

const readDir = promisify(fs.readdir)
const stat = promisify(fs.stat)

const deepReadDir = async(root, files = []) => {
  for (const item of await readDir(root)) {
    const fpath = path.join(root, item)
    if ((await stat(fpath)).isDirectory()) {
      const res = await deepReadDir(fpath, files)
      files = [
        ...files,
        ...res
      ]
    } else {
      files = [...files, fpath]
    }
  }

  return files
}

const generateConfig = async ({ dir, config, outDir }) => {
  const files = await deepReadDir(dir);

  return files.
    filter(file => file.match(/\.jsx?$/)).
    filter(file => !file.match(/SCOPE\.react\.js/)).
    map(file => ({
      ...config,
      entry: {
        [path.parse(file).base]: file
      },
      output: {
        path: path.join(outDir, path.relative(dir, path.parse(file).dir)),
        filename: path.parse(file).base,
        library: path.parse(file).base,
        libraryTarget: 'commonjs2'
      }
    }))
}

module.exports = generateConfig;

// (async() => {
//   const config = await generateConfig({
//     dir: path.resolve(__dirname, './src/client'),
//     config: {},
//     outDir: path.resolve(__dirname, './lib')
//   });

//   console.log(config)
// })()
