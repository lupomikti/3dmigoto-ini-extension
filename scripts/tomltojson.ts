#!/usr/bin/env -S deno run
import TOML from 'smol-toml'
import { readFileSync, writeFileSync } from 'node:fs'

const inputFiles = ["migoto.tmLanguage.toml", "regexp.tmLanguage.toml", "regexp-replace.tmLanguage.toml"]

for (const inputFile of inputFiles) {
    const obj = TOML.parse(readFileSync(`toml-syntaxes/${inputFile}`, {encoding: 'utf-8'}))
    writeFileSync(`vscode-ext/syntaxes/${inputFile.replace(/\.toml/, ".json")}`, JSON.stringify(obj, null, 2))
}