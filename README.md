# tauri-plugin-windows-version

> This plugin only works on tauri v2, if you need the v1 plugin, feel free to submit a PR!

Get the version number of the current Windows OS.

## Install

```shell
cargo add tauri-plugin-windows-version
```

You can install the JavaScript Guest bindings using your preferred JavaScript package manager:

```shell
pnpm add tauri-plugin-windows-version-api
```

## Usage

`src-tauri/src/lib.rs`

```diff
pub fn run() {
    tauri::Builder::default()
+       .plugin(tauri_plugin_windows_version::init())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

`src-tauri/capabilities/default.json`

```diff
{
    ...
    "permissions": [
        ...
+       "windows-version:default"
    ]
}
```

Afterwards all the plugin's APIs are available through the JavaScript guest bindings:

```ts
import { getWindowsVersion } from "tauri-plugin-windows-version-api";

const version = await getWindowsVersion();
console.log(version); // 11
```

## Methods

| Method              | Description                                       |
| ------------------- | ------------------------------------------------- |
| `getWindowsVersion` | Get the version number of the current Windows OS. |
| `isWindows7`        | Check if the current OS is Windows 7.             |
| `isWindows8`        | Check if the current OS is Windows 8.             |
| `isWindows10`       | Check if the current OS is Windows 10.            |
| `isWindows11`       | Check if the current OS is Windows 11.            |

## Example

```shell
git clone https://github.com/ayangweb/tauri-plugin-windows-version.git
```

```shell
pnpm install

pnpm build

cd examples/tauri-app

pnpm install

pnpm tauri dev
```

## Thanks

- Use [windows-version](https://crates.io/crates/windows-version) to get the version number of the current Windows OS.

## Who's Use It

- [Coco AI](https://github.com/infinilabs/coco-app) - Search, Connect, Collaborate, Your Personal AI Search and Assistant, all in one space.
