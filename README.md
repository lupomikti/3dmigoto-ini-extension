## What is this extension?
Inspired by the work done in the [GIMI_ini_extension](https://github.com/lewis252310/GIMI_ini_Extension) repo, this extension provides syntax highlighting for .ini files used by the program 3DMigoto, which have much extensive syntax than the typical header + key-value pair structure of normal .ini files. The reason for this projet's existence is then to improve upon that work by using more standardized scope names such that the highlighting will work with more themes out-of-the-box and will not need to provide its own theme; it also creates a grammar structure much more conducive to additions and modifications. While that original repo also provides additional functionality beyond the highlighting, this one currently only provides said highlighting with plans to reproduce those features in the future.

## Acknowledgement
As this project was inspired by the GIMI INI extension, I feel I should explain why this is a new repo and extension rather than a direct fork. Put simply, the changes I envisioned making were not as iterative as would fit the forking process. I have ditched many of the files, renamed and modified others and the grammar is quite different. I also did not want to inherit the way that repo was set up. That being said, since the original is licensed under GPLv3, I do still need to maintain the same license and state changes made.

1. Removed all files outside of the `/gimi-ini_extension` directory in the original repo.
2. Discarded all subdirectories of the above directory except for `syntaxes` and discarded all files except for `package.json` and `language-configuration.json`.
3. Modified `package.json` to a more barebones state, renamed `language-configuration.json` to `threedm-ini.language-configuration.json` and modified it.
4. Discarded the .yaml and v0.0.1 tmLanguage files under `syntaxes`, renamed the remaining .json file to `threedm-ini.tmLanguage.json` and modified it.

For more detailed comparison of modified files, one can download them from this repo and the originals from its repo at commit `4712a54c6378f340ed08c21cd68bca6bc18859f0` and compare them using a difference editor.

Of course this project would not be possible without the original contributors:
- @lewis252310
- @sinsofseven
- LeoMods