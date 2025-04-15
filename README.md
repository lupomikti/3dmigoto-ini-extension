## What is this project?
Inspired by the work done in the [GIMI_ini_extension](https://github.com/lewis252310/GIMI_ini_Extension) repo, this project provides multi-editor syntax highlighting for .ini files used by the program 3DMigoto which have much more extensive syntax than the typical header + key-value pair structure of normal .ini files. The reason for this project's existence is then to improve upon that work by using more standardized scope names such that the highlighting will work with more themes out-of-the-box and will not need to provide its own theme; it also creates a grammar structure much more conducive to additions and modifications. While that original repo also provides additional functionality beyond the highlighting, this one currently only provides said highlighting with plans to reproduce those programmatic features in the future via an LSP language server and Tree Sitter parsing.

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

#### VSCode
To install you can head over to the releases tab and grab the .vsix file, then in VSCode go to the extensions tab/page, click on 'More Actions', and choose 'Install from VSIX'.

Alternatively you can create the extension folder yourself after grabbing a .zip of the repo.

For more information about the highlighting of the VSCode extension, you can [see the README](vscode-ext/README.md) in its folder.

#### Sublime Text

Support for this editor is coming soon. The files in the repo are not complete currently.

#### Notepad++

Limited support for this editor can be achieved, but as the program does not employ grammar for its highlighting, many things present for the other editors will be missing for this one. Coming soon.

#### Kate
There is a .zip of the XML files in the releases that you can download or you can grab them from the repo directly. Adding user-defined highlighting to Kate is as simple as adding the XML files to the correct folder on your system. Here is a copy of instructions from KDE Documentation about [working with syntax highlighting](https://docs.kde.org/stable5/en/kate/katepart/highlight.html):

> Custom `.xml` highlight definition files are located in `org.kde.syntax-highlighting/syntax/` in your user folder found with **`qtpaths --paths GenericDataLocation`** which usually are `$HOME/.local/share/` and `/usr/share/`.
> 
> In Flatpak and Snap packages, the above directory will not work as the data location is different for each application. In a Flatpak application, the location of custom <acronym class="acronym">XML</acronym> files is usually `$HOME/.var/app/flatpak-package-name/data/org.kde.syntax-highlighting/syntax/` and in a Snap application that location is `$HOME/snap/snap-package-name/current/.local/share/org.kde.syntax-highlighting/syntax/`.
> 
> On Windows® these files are located `%USERPROFILE%\AppData\Local\org.kde.syntax-highlighting\syntax`. *`%USERPROFILE%`* usually expands to `C:\Users\user`.
> 
> In summary, for most configurations the directory of custom XML files is as follows:
> 
> | For local user | `$HOME/.local/share/org.kde.syntax-highlighting/syntax/` |
> | --- | --- |
> | For all users | `/usr/share/org.kde.syntax-highlighting/syntax/` |
> | For Flatpak packages | `$HOME/.var/app/flatpak-package-name/data/org.kde.syntax-highlighting/syntax/` |
> | For Snap packages | `$HOME/snap/snap-package-name/current/.local/share/org.kde.syntax-highlighting/syntax/` |
> | On Windows® | `%USERPROFILE%\AppData\Local\org.kde.syntax-highlighting\syntax` |

More info about how to customize things after installing the files can be found in the [README for Kate](kate-plugin/README.md).

## Development Info

The main thing to note about how this project is set up in its current state is that instead of using YAML for the tmLanguage grammars and then converting to JSON, it uses TOML for them and then converts to JSON. The conversion is done with a simple script in the `bin` directory; the `package.json` is set up such that while in the project root, you can type `toml-to-json` in the CLI and it will perform the conversion -- no need for `npm run` (you do need to be sure to link it though by running `npm link`).

There is also a counterpart for converting TOML to YAML for sublime-syntax support.

#### VS Code Extension

To build the VS Code Extension VSIX package while in its directory (vscode-ext), do the following:

`vsce package --follow-symlinks --ignoreFile "..\.vscodeignore" --no-git-tag-version`

If you want to have the version increment or be set to a specific one:

`vsce package <version> --follow-symlinks --ignoreFile "..\.vscodeignore" --no-git-tag-version [--pre-release]`

where `<version>` can be like "0.4.3" or "minor".