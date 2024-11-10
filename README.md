## What is this extension?
Inspired by the work done in the [GIMI_ini_extension](https://github.com/lewis252310/GIMI_ini_Extension) repo, this extension provides syntax highlighting for .ini files used by the program 3DMigoto, which have much more extensive syntax than the typical header + key-value pair structure of normal .ini files. The reason for this project's existence is then to improve upon that work by using more standardized scope names such that the highlighting will work with more themes out-of-the-box and will not need to provide its own theme; it also creates a grammar structure much more conducive to additions and modifications. While that original repo also provides additional functionality beyond the highlighting, this one currently only provides said highlighting with plans to reproduce those features in the future.

## Acknowledgement
As this project was inspired by the GIMI INI extension, I feel I should explain why this is a new repo and extension rather than a direct fork. Put simply, the changes I envisioned making were not as iterative as would fit the forking process. I have ditched many of the files, renamed and modified others and the grammar is quite different. I also did not want to inherit the way that repo was set up. That being said, since the original is licensed under GPLv3, I do still need to maintain the same license and state changes made.

1. Removed all files outside of the `/gimi-ini_extension` directory in the original repo.
2. Discarded all subdirectories of the above directory except for `syntaxes` and discarded all files except for `package.json` and `language-configuration.json`.
3. Modified `package.json` to a more barebones state, renamed `language-configuration.json` to `threedm-ini.language-configuration.json` and modified it.
4. Discarded the .yaml and v0.0.1 tmLanguage files under `syntaxes`, renamed the remaining .json file to `threedm-ini.tmLanguage.json` and heavily modified it, with few things from the original remaining (mostly just some keyword regexes).

For more detailed comparison of modified files, one can download them from this repo and the originals from its repo at commit `4712a54c6378f340ed08c21cd68bca6bc18859f0` and compare them using a difference editor.

Of course this project would not be possible without the original contributors:
- @lewis252310
- @sinsofseven
- @leotorrez

## Installation and Use
To install you can head over to the releases tab and grab the .vsix file, then in VSCode go to the extensions tab/page, click on 'More Actions', and choose 'Install from VSIX'.

Alternatively you can create the extension folder yourself after grabbing a .zip of the repo.

#### Some things to note:
Not all scopes are commonly styled by themes. For example, a lot of themes do not provide styling for the broad scope `variable.language`, opting to style things that are more specific like `variable.language.this.cpp`. Here are some scopes that I have personally created styling for in my `settings.json` for my current theme.

- `variable.other.readwrite`
- `punctuation.definition.variable`
- `variable.language.shader.ini.3dm`, `variable.language.buffer.ini.3dm`, `variable.language.ini.3dm`
- `punctuation.section.embedded`
- `constant.other.path.ini.3dm`, `constant.other.file.ini.3dm` (I don't color these, but I do underline them)
- `entity.name.namespace.ini.3dm` (themes usually style this one, I just don't like the color chosen with my theme next to the variable color, so I changed it)

Here's how to edit a theme via your `settings.json`:

Open up your `settings.json` file; you can do this by opening the command palette (Ctrl+Shift+P on Windows), typing "Open User Settings" and choosing the one that has (JSON) next to it. In it, start a new property called `"editor.tokenColorCustomizations"` with the value an object, and in that object made a property for the name of your theme in square brackets [ ]. This will also have an object value, with a property of `"textMateRules"` whose value is an array of objects with a scope property and a settings property. That's a bit hard to follow in text, so here's an example using the Catppuccin Mocha theme:

```json
{
    ...
    "editor.tokenColorCustomizations": {
        "[Catppuccin Mocha]": {
            "textMateRules": [
                {
                    "scope": "variable.other.readwrite",
                    "settings": {
                        "foreground": "#89b4fa",
                        "fontStyle": ""
                    }
                },
                {
                    "scope": [
                        "variable.language.shader.ini.3dm",
                        "variable.language.buffer.ini.3dm",
                        "variable.language.ini.3dm"
                    ],
                    "settings": {
                        "foreground": "#f38ba8",
                        "fontStyle": ""
                    }
                },
                {
                    "scope": [
                        "constant.other.path.ini.3dm",
                        "constant.other.file.ini.3dm"
                    ],
                    "settings": {
                        "fontStyle": "underline"
                    }
                }
            ]
        }
    }
    ...
}
```

## Development Info

The main thing to note about how this project is set up in its current state is that instead of using YAML for the grammar and then converting to JSON, it uses TOML for the grammar and then converts to JSON. The conversion is done with a simple script in the `bin` directory; the `package.json` is set up such that while in the project root, you can type `toml-to-json` in the CLI and it will perform the conversion -- no need for `npm run` (you do need to be sure to link it though by running `npm link`).

#### VS Code Extension

To build the VS Code Extension VSIX package while in its directory, do the following:

`vsce package --follow-symlinks --ignoreFile "..\.vscodeignore"`

If you want to have the version increment or be set to a specific one:

`vsce package <version> --follow-symlinks --ignoreFile "..\.vscodeignore" -m <commit-message> --no-git-tag-version [--pre-release]`

where `<version>` can be like "0.4.3" or "minor".