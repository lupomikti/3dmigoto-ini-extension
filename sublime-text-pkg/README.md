## What is this project?
Inspired by the work done in the [GIMI_ini_extension](https://github.com/lewis252310/GIMI_ini_Extension) repo, this project provides multi-editor syntax highlighting for .ini files used by the program 3DMigoto which have much more extensive syntax than the typical header + key-value pair structure of normal .ini files. The reason for this project's existence is then to improve upon that work by using more standardized scope names such that the highlighting will work with more themes out-of-the-box and will not need to provide its own theme; it also creates a grammar structure much more conducive to additions and modifications. While that original repo also provides additional functionality beyond the highlighting, this one currently only provides said highlighting with plans to reproduce those programmatic features in the future via an LSP language server and Tree Sitter parsing.

## Current Features

* Provides syntax highlighting for the Migoto INI file language including the PCRE2 Regular Expressions used in ShaderRegex sections
* Allows for comment toggling
* Adds folding for whole sections by their header
* Adds a pseudo-multiline comment construct `;< ... ;>`
* Defines variables and callable sections as symbols for easier symbol navigation
* Adds automatic indentation for conditional blocks

Programmatic language features are planned to come soon once an LSP language server is made.

#### Customization

You can customize the colors of the highlighting by going to `Preferences > Customize Color Scheme`; this will open a window with the current theme's color scheme file open on the left and a copy of that on the right where you will enter your customizations in. There is a comment at the top of the right-side editor with a link to color scheme documentation. The gist is that you will mimic what the official theme file is doing and your customizations will take precedence. For example, I have a custom Catppuccin theme installed and have made some modifications to it as follows:

<details>
<summary>JSON edit of Catppuccin Mocha theme for Migoto highlighting</summary>

```jsonc
{
	"variables":
	{
	},
	"globals":
	{
	},
	"rules":
	[
		{
			"scope": "variable.other.readwrite, punctuation.definition.variable",
			"foreground": "var(pink)"
		},
		{
			"scope": "entity.name.section",
			"foreground": "var(yellow)",
			"font_style": "italic"
		},
		{
			"scope": "constant.language.migoto",
			"foreground": "var(red)",
			"font_style": ""
		},
		{
			"scope": "entity.name.function.migoto",
			"foreground": "var(pink)"
		},
		{
			"scope": "keyword.control.flow.migoto",
			"font_style": "bold"
		},
		{
			"scope": "keyword.operator",
			"font_style": ""
		},
		{
			"scope": "entity.name.namespace.migoto",
			"foreground": "var(green)"
		},
		{
			"scope": "entity.name.function.section-type.migoto, support.type.dxgi-format",
			"foreground": "var(lavender)",
		},
		{
			"scope": "keyword.other.migoto.command-list",
			"foreground": "var(maroon)",
			"font_style": "bold"
		},
		{
			"scope": "constant.other.path, constant.other.file",
			"font_style": "underline"
		}
	]
}
```
</details>

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