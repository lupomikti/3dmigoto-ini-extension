## What is this project?
Inspired by the work done in the [GIMI_ini_extension](https://github.com/lewis252310/GIMI_ini_Extension) repo, this project provides multi-editor syntax highlighting for .ini files used by the program 3DMigoto which have much more extensive syntax than the typical header + key-value pair structure of normal .ini files. The reason for this project's existence is then to improve upon that work by using more standardized scope names such that the highlighting will work with more themes out-of-the-box and will not need to provide its own theme; it also creates a grammar structure much more conducive to additions and modifications. While that original repo also provides additional functionality beyond the highlighting, this one currently only provides said highlighting with plans to reproduce those programmatic features in the future via an LSP language server and Tree Sitter parsing.

The Tree-sitter parser project is live and can be found at [tree-sitter-migoto](https://github.com/lupomikti/tree-sitter-migoto).

## Installation and Use

### VSCode
Currently, the extension is not published to any marketplaces, but this is planned for the future. To install right now you can head over to the [Releases tab](https://github.com/lupomikti/3dmigoto-ini-extension/releases/latest) and grab the `.vsix` file, then in VSCode go to the extensions tab/page, click on 'More Actions', and choose 'Install from VSIX'.

Alternatively you can create the extension folder yourself after grabbing a .zip of the repo.

For more information about the highlighting of the VSCode extension and how to customize the colors, you can [see the README](https://github.com/lupomikti/migoto-vscode) in its repo.

### Sublime Text

> [!warning]
> This package is only claiming to support Sublime Text 4. It provides no guarantees of compatibility for Sublime Text 3 or earlier versions.

Currently, the package is not published to PackageControl, but this is planned for the future. A `*.sumblime-package` file is provided on the [Releases page](https://github.com/lupomikti/3dmigoto-ini-extension/releases/latest) which can be downloaded and added to your installation. The location to add the file to will depend on how and where you installed SublimeText. Generally, user-installed zipped packages should go in `<data_path>/Installed Packages/` where `<data_path>` may look like `C:\Program Files\Sublime Text 4\Data` on a Windows system.

This package has more than just highlighting, so you should take a look at [the README](sublime-text-pkg/README.md) for it for more specific details about customization of colors and additional features.

### Notepad++

To use this highlighting, you download and extract the `*.udl.zip` file from the [Releases page](https://github.com/lupomikti/3dmigoto-ini-extension/releases/latest) or directly grab the light or dark theme UDL file from the [`npp-plugin` folder](npp-plugin), go to `Language > User Defined Languages > Define your language...` from the top menu inside Notepad++, then choose the `Import` button and select the file you downloaded.

Please [see the README](npp-plugin/README.md) for this editor for more information including color customization.

### Kate
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

### Zed Editor

There is now support for the Zed Editor thanks to the [Tree Sitter](https://github.com/lupomikti/tree-sitter-migoto) implementation of the Migoto DSL. The extension has been added as a submodule to this repo to keep things organized cohesively and in a manner thoughtful of future development and publishing.

To install the extension for Zed while it is not published, you will need to follow the instructions for [Installing a Dev Extension](https://zed.dev/docs/extensions/developing-extensions#developing-an-extension-locally) using the [migoto-ini-zed](https://codeberg.org/lupomikti/migoto-ini-zed) repo (not this one, as the `extension.toml` is not configured for it).

> [!warning]
> Please be advised that Zed will clone the repo and build the tree-sitter-migoto parser with WebAssembly as the target. This can take a while to build because the DSL is far from simple and produces a large lexing function which WebAssembly is poorly optimized to handle. On my machine with a Ryzen 9 5900X and 32GB RAM, the WebAssembly takes 1 minute to build and can use upward of 16GB RAM on its own.

## Development Info

A key difference between this project and its predecesor is that instead of using YAML for the tmLanguage grammars and then coverting to JSON, it uses TOML for them and then converts to JSON. The sublime-syntax files are also first written in TOML and then converted to YAML. These conversions are done with two scripts, appropriately in the `scripts` directory. To run these scripts, you make use of the deno tasks set up in the project. `deno task toml-to-json` or `deno task toml-to-yaml`.

> [!note]
> You could also make use of Bun here, but you will need to run the scripts with the `--bun` flag as they contain a shebang to use the Deno runtime. The command would then be something like `bun --bun scripts/tomltojson.ts`.

The most important distinction is that this repository operates as a monorepo for all editor integrations and makes use of submodules for those that require their own repo for publishing purposes. Please see the `CONTRIBUTING.md` files in each submodule for details about developing those extensions.

### Sublime Text Package, Kate, Notepad++

There are build tasks for each of these individually, or you can do `deno task build` to build all 3 at one time. __Requires 7-zip to be installed on your system and in your PATH.__

## Acknowledgement
As this project was inspired by the GIMI INI extension, I feel I should explain why this is a new repo and extension rather than a direct fork. Put simply, the changes I envisioned making were not as iterative as would fit the forking process. I have ditched many of the files, renamed and modified others and the grammar is quite different. I also did not want to inherit the way that repo was set up. That being said, since the original is licensed under GPLv3, I do still need to maintain the same license and state changes made for the VSCode part at least.

1. Removed all files outside of the `/gimi-ini_extension` directory in the original repo.
2. Discarded all subdirectories of the above directory except for `syntaxes` and discarded all files except for `package.json` and `language-configuration.json`.
3. Modified `package.json` to a more barebones state, renamed `language-configuration.json` to `threedm-ini.language-configuration.json` and modified it.
4. Discarded the .yaml and v0.0.1 tmLanguage files under `syntaxes`, renamed the remaining .json file to `threedm-ini.tmLanguage.json` and heavily modified it, with few things from the original remaining (mostly just some keyword regexes).

For more detailed comparison of modified files, one can download them from this repo and the originals from its repo at commit `4712a54c6378f340ed08c21cd68bca6bc18859f0` and compare them using a difference editor.

In general, the GPLv3 or later licensing applies to the `vscode-ext` submodule and all other code in this repository with the sole exception of the indenpendently developed `zed-ext` which is MIT licensed.

Of course this project would not be possible without the original contributors:
- [@lewis252310](https://github.com/lewis252310)
- [@sinsofseven](https://github.com/sinsofseven)
- [@leotorrez](https://github.com/leotorrez)