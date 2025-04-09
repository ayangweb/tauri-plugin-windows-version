import { useMount, useReactive } from "ahooks";
import { List } from "antd";
import {
  getWindowsVersion,
  isWindows7,
  isWindows8,
  isWindows10,
  isWindows11,
} from "tauri-plugin-windows-version-api";

const App = () => {
  const state = useReactive({
    version: null,
    isWindows7: false,
    isWindows8: false,
    isWindows10: false,
    isWindows11: false,
  });

  useMount(async () => {
    Object.assign(state, {
      version: await getWindowsVersion(),
      isWindows7: await isWindows7(),
      isWindows8: await isWindows8(),
      isWindows10: await isWindows10(),
      isWindows11: await isWindows11(),
    });
  });

  return (
    <List bordered>
      {Object.entries(state).map(([key, value]) => {
        return (
          <List.Item key={key} actions={[JSON.stringify(value)]}>
            <List.Item.Meta title={key} />
          </List.Item>
        );
      })}
    </List>
  );
};

export default App;
