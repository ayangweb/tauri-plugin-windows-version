use tauri::command;

/// Get the version number of the current Windows OS.
///
/// # Examples
/// ```
/// use tauri_plugin_windows_version::get_windows_version;
///
/// let version = get_windows_version().await;
/// println!("Windows version: {}", version); // Some(11)
/// ```
#[command]
pub async fn get_windows_version() -> Option<u8> {
    #[cfg(target_os = "windows")]
    {
        let os_version = windows_version::OsVersion::current();

        let major = os_version.major;
        let minor = os_version.minor;
        let build = os_version.build;

        match (major, minor) {
            (6, 1) => Some(7),                     // Windows 7
            (6, 2 | 3) => Some(8),                 // Windows 8
            (10, _) if build < 22000 => Some(10),  // Windows 10
            (10, _) if build >= 22000 => Some(11), // Windows 11
            _ => None,                             // Other unknown version
        }
    }

    #[cfg(not(target_os = "windows"))]
    None
}

/// Check if the current OS is Windows 7.
///
/// # Examples
/// ```
/// use tauri_plugin_windows_version::is_windows_7;
///
/// let yes = is_windows_7().await;
/// println!("Is Windows 7: {}", yes); // true
/// ```
#[command]
pub async fn is_windows_7() -> bool {
    #[cfg(target_os = "windows")]
    return matches!(get_windows_version().await, Some(7));

    #[cfg(not(target_os = "windows"))]
    false
}

/// Check if the current OS is Windows 8.
///
/// # Examples
/// ```
/// use tauri_plugin_windows_version::is_windows_8;
///
/// let yes = is_windows_8().await;
/// println!("Is Windows 8: {}", yes); // true
/// ```
#[command]
pub async fn is_windows_8() -> bool {
    #[cfg(target_os = "windows")]
    return matches!(get_windows_version().await, Some(8));

    #[cfg(not(target_os = "windows"))]
    false
}

/// Check if the current OS is Windows 10.
///
/// # Examples
/// ```
/// use tauri_plugin_windows_version::is_windows_10;
///
/// let yes = is_windows_10().await;
/// println!("Is Windows 10: {}", yes); // true
/// ```
#[command]
pub async fn is_windows_10() -> bool {
    #[cfg(target_os = "windows")]
    return matches!(get_windows_version().await, Some(10));

    #[cfg(not(target_os = "windows"))]
    false
}

/// Check if the current OS is Windows 11.
///
/// # Examples
/// ```
/// use tauri_plugin_windows_version::is_windows_11;
///
/// let yes = is_windows_11().await;
/// println!("Is Windows 11: {}", yes); // true
/// ```
#[command]
pub async fn is_windows_11() -> bool {
    #[cfg(target_os = "windows")]
    return matches!(get_windows_version().await, Some(11));

    #[cfg(not(target_os = "windows"))]
    false
}
