## What is this project?
Inspired by the work done in the [GIMI_ini_extension](https://github.com/lewis252310/GIMI_ini_Extension) repo, this project provides multi-editor syntax highlighting for .ini files used by the program 3DMigoto which have much more extensive syntax than the typical header + key-value pair structure of normal .ini files. The reason for this project's existence is then to improve upon that work by using more standardized scope names such that the highlighting will work with more themes out-of-the-box and will not need to provide its own theme; it also creates a grammar structure much more conducive to additions and modifications. While that original repo also provides additional functionality beyond the highlighting, this one currently only provides said highlighting with plans to reproduce those programmatic features in the future via an LSP language server and Tree Sitter parsing.

## Current and Future Features

Currently this folder only provides syntax highlighting. Notepad++ does not employ a grammar for it's syntax highlighting system. This means we are very limited in what we can do. Notepad++ also does not have support for LSP language servers, although there is someone out there working on a plugin for that; however, even if that plugin reaches stable state, we will still be limited on what we can do by the XML files Notepad++ needs to work.

#### Installation

To use this highlighting, you download the `3DM-INI.udl.xml` file, go to `Language > User Defined Languages > Define your language...` from the top menu, then choose the `Import` button and select the file you downloaded.

#### Customization

You can customize the colors of the highlighting by going to `Language > User Defined Languages > Define your language...` then selecting `3DM-INI` from the dropdown at the top of the dialog. Choose `Create new` or `Save as` once you are done making adjustments to settings. There is a link the dialog that comes up to the documentation for User Defined Languages and that can explain better than I can in this short document of what everything does and how to make changes. Or you can just start clicking the `Style` buttons and mess around.

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

### Catppuccin Colors

The colors used for these Notepad++ highlights are the colors from the [Catppuccin](https://github.com/catppuccin/catppuccin) palette. All of the Catppuccin implementations are licensed under MIT.