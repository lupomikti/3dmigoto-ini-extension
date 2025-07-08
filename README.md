## What is this project?
Inspired by the work done in the [GIMI_ini_extension](https://github.com/lewis252310/GIMI_ini_Extension) repo, this project provides multi-editor syntax highlighting for .ini files used by the program 3DMigoto which have much more extensive syntax than the typical header + key-value pair structure of normal .ini files. The reason for this project's existence is then to improve upon that work by using more standardized scope names such that the highlighting will work with more themes out-of-the-box and will not need to provide its own theme; it also creates a grammar structure much more conducive to additions and modifications. While that original repo also provides additional functionality beyond the highlighting, this one currently only provides said highlighting with plans to reproduce those programmatic features in the future via an LSP language server and Tree Sitter parsing.

## Installation and Use

#### VSCode
To install you can head over to the [Releases tab](https://github.com/lupomikti/3dmigoto-ini-extension/releases/latest) and grab the `.vsix` file, then in VSCode go to the extensions tab/page, click on 'More Actions', and choose 'Install from VSIX'.

Alternatively you can create the extension folder yourself after grabbing a .zip of the repo.

For more information about the highlighting of the VSCode extension and how to customize the colors, you can [see the README](vscode-ext/README.md) in its folder.

#### Sublime Text

A `.sumblime-package` file is provided on the [Releases page](https://github.com/lupomikti/3dmigoto-ini-extension/releases/latest) which can be downloaded and added to your installation. The location to add the file to will depend on how and where you installed SublimeText. Generally, user-installed zipped packages should go in `<data_path>/Installed Packages/` where `<data_path>` may look like `C:\Program Files\Sublime Text 4\Data` on a Windows system. This package has more than just highlighting, so you should take a look at [the README](sublime-text-pkg/README.md) for it for more specific details about customization of colors and additional features.

#### Notepad++

To use this highlighting, you download the `Migoto.udl.xml` file (or `Migoto (dark theme).udl.xml`) either from the [Releases page](https://github.com/lupomikti/3dmigoto-ini-extension/releases/latest) or directly from the `npp-plugin` folder, go to `Language > User Defined Languages > Define your language...` from the top menu inside Notepad++, then choose the `Import` button and select the file you downloaded. Please [see the README](npp-plugin/README.md) for this editor for more information including color customization.

#### Kate
There is a .zip of the XML files in the [Releases](https://github.com/lupomikti/3dmigoto-ini-extension/releases/latest) that you can download or you can grab them from the repo directly. Adding user-defined highlighting to Kate is as simple as adding the XML files to the correct folder on your system. Here is a copy of instructions from KDE Documentation about [working with syntax highlighting](https://docs.kde.org/stable5/en/kate/katepart/highlight.html):

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

The main thing to note about how this project is set up in its current state is that instead of using YAML for the tmLanguage grammars and then converting to JSON, it uses TOML for them and then converts to JSON. The sublime-syntax files are also first written in TOML and then converted to YAML. The conversions are done with two simple scripts in the `bin` directory; the `package.json` is set up such that while in the project root, you can type `toml-to-json` or `toml-to-yaml` in the CLI and it will perform the intended conversion with no need for `npm run` (you do need to be sure to link them first though by running `npm link` in the project root; this only needs to be done once).

#### VS Code Extension

To build the VS Code Extension VSIX package while in its directory (vscode-ext), you will need to have installed `vsce` and then should do one of the following:

1. `cd vscode-ext && npm run build-vsce <version>`

2. `cd vscode-ext && vsce package <version> [--pre-release] --follow-symlinks --ignoreFile "..\.vscodeignore" --no-git-tag-version`

`<version>` can be like "0.4.3" or "minor" to increment only the minor number from the previous value in `package.json`.

Because this will change the `package.json` version, you should always run it before building the other editor packages.

#### Sublime Text Package, Kate, Notepad++

There are npm build scripts for each of these individually, or you can do `npm run build` to build all 3 at one time. Requires 7-zip to be installed on your system and in your PATH.

## Acknowledgement
As this project was inspired by the GIMI INI extension, I feel I should explain why this is a new repo and extension rather than a direct fork. Put simply, the changes I envisioned making were not as iterative as would fit the forking process. I have ditched many of the files, renamed and modified others and the grammar is quite different. I also did not want to inherit the way that repo was set up. That being said, since the original is licensed under GPLv3, I do still need to maintain the same license and state changes made.

1. Removed all files outside of the `/gimi-ini_extension` directory in the original repo.
2. Discarded all subdirectories of the above directory except for `syntaxes` and discarded all files except for `package.json` and `language-configuration.json`.
3. Modified `package.json` to a more barebones state, renamed `language-configuration.json` to `threedm-ini.language-configuration.json` and modified it.
4. Discarded the .yaml and v0.0.1 tmLanguage files under `syntaxes`, renamed the remaining .json file to `threedm-ini.tmLanguage.json` and heavily modified it, with few things from the original remaining (mostly just some keyword regexes).

For more detailed comparison of modified files, one can download them from this repo and the originals from its repo at commit `4712a54c6378f340ed08c21cd68bca6bc18859f0` and compare them using a difference editor.

Of course this project would not be possible without the original contributors:
- [@lewis252310](https://github.com/lewis252310)
- [@sinsofseven](https://github.com/sinsofseven)
- [@leotorrez](https://github.com/leotorrez)