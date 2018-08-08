import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import path from 'path'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

// postcss plugin
import postcssImport from 'postcss-import'
import vars from 'postcss-simple-vars'
import nested from 'postcss-nested'
import extend from 'postcss-extend'
import mixins from 'postcss-mixins'
import cssnext from 'postcss-cssnext'
import cssnano from 'cssnano'

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
	watch: {
	    exclude: 'node_modules/**',
	    clearScreen: false
	},
	plugins: [
		json(),
		resolve({
		    customResolveOptions: {
		      moduleDirectory: 'node_modules'
		    }
		  }),
		commonjs(),
		postcss({
			extract: './dist/bundle.css',
			plugins: [
				postcssImport(),
				vars(),
				nested(),
				extend(),
				mixins(),
				cssnext({ warnForDuplicates: false }),
				cssnano()
			]
		}),
		serve({
	      open: true, // 是否打开浏览器
	      contentBase: './', // 入口html的文件位置
	      historyApiFallback: true, // Set to true to return index.html instead of 404
	      host: 'localhost',
	      port: 8080
	    }),
	    livereload({
	    	watch: './'
	    })
	],
	external: ['lodash', 'lodash/merge', path.resolve( './src/foo.js' )]
}