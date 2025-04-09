use tauri::{
    generate_handler,
    plugin::{Builder, TauriPlugin},
    Runtime,
};

mod commands;

pub use commands::*;

pub fn init<R: Runtime>() -> TauriPlugin<R> {
    Builder::new("windows-version")
        .invoke_handler(generate_handler![
            commands::get_windows_version,
            commands::is_windows_7,
            commands::is_windows_8,
            commands::is_windows_10,
            commands::is_windows_11,
        ])
        .build()
}
