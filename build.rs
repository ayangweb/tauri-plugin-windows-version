const COMMANDS: &[&str] = &[
    "get_windows_version",
    "is_windows_7",
    "is_windows_8",
    "is_windows_10",
    "is_windows_11",
];

fn main() {
    tauri_plugin::Builder::new(COMMANDS).build();
}
