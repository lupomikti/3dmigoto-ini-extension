import toml from '@iarna/toml'
import { readFileSync, writeFileSync } from 'fs'

const inputFile = "threedm-ini.tmLanguage.toml",
      outputFileName = "threedm-ini.tmLanguage.json"

let obj = toml.parse(readFileSync(`syntaxes/${inputFile}`, {encoding: 'utf-8'}))
writeFileSync(`syntaxes/${outputFileName}`, JSON.stringify(obj, null, 2))