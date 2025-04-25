import TOML from 'smol-toml'
import YAML from 'yaml'
import * as prettier from 'prettier'
import { readFileSync, writeFileSync } from 'fs'

const inputFiles = ["Migoto.sublime-syntax.toml"]

for (let inputFile of inputFiles) {
    let inputFilePath = `toml-syntaxes/${inputFile}`
    let obj = TOML.parse(readFileSync(inputFilePath, {encoding: 'utf-8'}))
    let prettyResult = await prettier.format(`%YAML 1.2\n---\n${YAML.stringify(obj, {defaultKeyType: 'PLAIN'})}`, { parser: 'yaml' })
    writeFileSync(`sublime-text-pkg/${inputFile.replace(/\.toml/, "")}`, prettyResult)
}