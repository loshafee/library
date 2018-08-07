import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import path from 'path'

export default {
	input: 'src/core.js',
	output: {
		file: 'bundle.js',
		format: 'umd',
		name: 'VIVI',
		globals: {
			lodash: '_',
			'lodash/merge': '_merge'
		}
	},
	plugins: [
		json(),
		resolve({
		    customResolveOptions: {
		      moduleDirectory: 'node_modules'
		    }
		  }),
		commonjs()
	],
	external: ['lodash', 'lodash/merge', path.resolve( './src/foo.js' )]
}