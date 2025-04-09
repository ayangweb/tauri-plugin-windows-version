import { invoke } from "@tauri-apps/api/core";

export const COMMAND = {
  GET_WINDOWS_VERSION: "plugin:windows-version|get_windows_version",
  IS_WINDOWS_7: "plugin:windows-version|is_windows_7",
  IS_WINDOWS_8: "plugin:windows-version|is_windows_8",
  IS_WINDOWS_10: "plugin:windows-version|is_windows_10",
  IS_WINDOWS_11: "plugin:windows-version|is_windows_11",
};

export type WindowsVersion = 7 | 8 | 10 | 11 | null;

/**
 * Get the version number of the current Windows OS.
 *
 * @example
 * ```
 * import { getWindowsVersion } from "tauri-plugin-windows-version-api";
 *
 * const version = await getWindowsVersion();
 * console.log(version); // 11
 * ```
 */
export const getWindowsVersion = () => {
  return invoke<WindowsVersion>(COMMAND.GET_WINDOWS_VERSION);
};

/**
 * Check if the current OS is Windows 7.
 *
 * @example
 * ```
 * import { isWindows7 } from "tauri-plugin-windows-version-api";
 *
 * const yes = await isWindows7();
 * console.log(yes); // true
 * ```
 */
export const isWindows7 = () => {
  return invoke<boolean>(COMMAND.IS_WINDOWS_7);
};

/**
 * Check if the current OS is Windows 8.
 *
 * @example
 * ```
 * import { isWindows8 } from "tauri-plugin-windows-version-api";
 *
 * const yes = await isWindows8();
 * console.log(yes); // true
 * ```
 */
export const isWindows8 = () => {
  return invoke<boolean>(COMMAND.IS_WINDOWS_8);
};

/**
 * Check if the current OS is Windows 10.
 *
 * @example
 * ```
 * import { isWindows10 } from "tauri-plugin-windows-version-api";
 *
 * const yes = await isWindows10();
 * console.log(yes); // true
 * ```
 */
export const isWindows10 = () => {
  return invoke<boolean>(COMMAND.IS_WINDOWS_10);
};

/**
 * Check if the current OS is Windows 11.
 *
 * @example
 * ```
 * import { isWindows11 } from "tauri-plugin-windows-version-api";
 *
 * const yes = await isWindows11();
 * console.log(yes); // true
 * ```
 */
export const isWindows11 = () => {
  return invoke<boolean>(COMMAND.IS_WINDOWS_11);
};
