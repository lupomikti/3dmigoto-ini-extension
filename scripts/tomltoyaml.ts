#!/usr/bin/env -S deno run
import TOML from 'smol-toml'
import YAML from 'yaml'
import * as prettier from 'prettier'
import { readFileSync, writeFileSync } from 'node:fs'

const inputFiles = ["Migoto.sublime-syntax.toml"]

for (const inputFile of inputFiles) {
    const inputFilePath = `toml-syntaxes/${inputFile}`
    const obj = TOML.parse(readFileSync(inputFilePath, {encoding: 'utf-8'}))
    const prettyResult = await prettier.format(`%YAML 1.2\n---\n${YAML.stringify(obj, {defaultKeyType: 'PLAIN'})}`, { parser: 'yaml' })
    writeFileSync(`sublime-text-pkg/${inputFile.replace(/\.toml/, "")}`, prettyResult)
}