import toml from '@iarna/toml'
import { readFileSync, writeFileSync } from 'fs'

const inputFiles = ["threedm-ini.tmLanguage.toml", "regexp.tmLanguage.toml", "regexp-replace.tmLanguage.toml"]

for (let inputFile of inputFiles) {
    let obj = toml.parse(readFileSync(`toml-syntaxes/${inputFile}`, {encoding: 'utf-8'}))
    writeFileSync(`vscode-ext/syntaxes/${inputFile.replace(/\.toml/, ".json")}`, JSON.stringify(obj, null, 2))
}