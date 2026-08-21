import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { resolve, dirname } from 'node:path'

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const templatePath = resolve(rootDir, 'dist', 'index.html')
const ssrEntryPath = resolve(rootDir, 'dist-ssr', 'entry-server.js')

const { render } = await import(pathToFileURL(ssrEntryPath))
const appHtml = render()

const template = await readFile(templatePath, 'utf-8')

if (!template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html is missing the <!--app-html--> placeholder')
}

await writeFile(templatePath, template.replace('<!--app-html-->', appHtml))
