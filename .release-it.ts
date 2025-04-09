import type { Config } from "release-it";

export default {
  git: {
    commitMessage: "tauri-plugin-windows-version-api v${version}",
    tagName: "v${version}",
  },
  npm: {
    publish: true,
  },
} satisfies Config;
