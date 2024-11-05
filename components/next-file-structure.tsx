import { File, Folder, Tree } from "@/components/global/tree";

export function FileTreeDemo() {
  return (
    <div className="relative flex h-[450px] w-1/2 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Tree
        className="p-2 overflow-hidden rounded-md bg-background"
        initialSelectedId="7"
        initialExpandedItems={["2"]}
        elements={ELEMENTS}
      >
        <Folder value="1" element="public"></Folder>
        <Folder value="2" element="src">
          <Folder value="3" element="app">
            <File value="4">
              <p>global.css</p>
            </File>
            <File value="5">
              <p>layout.tsx</p>
            </File>
            <File value="6">
              <p>not-found.tsx</p>
            </File>
            <File value="7">
              <p>page.tsx</p>
            </File>
          </Folder>
          <Folder value="8" element="components">
            <Folder value="9" element="forms">
              <Folder value="10" element="sign-in">
                <File value="11">
                  <p>index.tsx</p>
                </File>
              </Folder>
              <Folder value="12" element="sign-up">
                <File value="13">
                  <p>index.tsx</p>
                </File>
              </Folder>
            </Folder>
            <Folder value="14" element="global">
              <Folder value="15" element="accordion">
                <File value="16">
                  <p>index.tsx</p>
                </File>
              </Folder>
              <Folder value="17" element="backdrop-gradient">
                <File value="18">
                  <p>index.tsx</p>
                </File>
              </Folder>
              <Folder value="19" element="copy-button">
                <File value="20">
                  <p>index.tsx</p>
                </File>
              </Folder>
              <Folder value="21" element="drop-down">
                <File value="22">
                  <p>index.tsx</p>
                </File>
              </Folder>
              <Folder value="23" element="flip-link">
                <File value="24">
                  <p>index.tsx</p>
                </File>
              </Folder>
              <Folder value="25" element="grid-pattern">
                <File value="26">
                  <p>index.tsx</p>
                </File>
              </Folder>
              <Folder value="27" element="particles">
                <File value="28">
                  <p>index.tsx</p>
                </File>
              </Folder>
              <Folder value="29" element="rich-text-editor">
                <File value="30">
                  <p>slash-command.tsx</p>
                </File>
                <File value="31">
                  <p>index.tsx</p>
                </File>
                <File value="32">
                  <p>extensions.ts</p>
                </File>
                <File value="33">
                  <p>node-selector.tsx</p>
                </File>
                <File value="34">
                  <p>image.ts</p>
                </File>
                <File value="35">
                  <p>text-selector.tsx</p>
                </File>
              </Folder>
              <Folder value="36" element="skeleton">
                <File value="37">
                  <p>index.tsx</p>
                </File>
              </Folder>
              <Folder value="38" element="glass-sheet">
                <File value="39">
                  <p>index.tsx</p>
                </File>
              </Folder>
              <Folder value="40" element="search">
                <File value="41">
                  <p>index.tsx</p>
                </File>
                <File value="42">
                  <p>no-results.tsx</p>
                </File>
              </Folder>
              <Folder value="43" element="user-widget">
                <File value="44">
                  <p>index.tsx</p>
                </File>
                <File value="45">
                  <p>notification.tsx</p>
                </File>
              </Folder>
              <Folder value="46" element="glass-card">
                <File value="47">
                  <p>index.tsx</p>
                </File>
              </Folder>
              <Folder value="48" element="form-generator">
                <File value="49">
                  <p>index.tsx</p>
                </File>
              </Folder>
              <Folder value="50" element="gradient-text">
                <File value="51">
                  <p>index.tsx</p>
                </File>
              </Folder>
              <Folder value="52" element="loader">
                <File value="53">
                  <p>index.tsx</p>
                </File>
              </Folder>
              <Folder value="54" element="glass-modal">
                <File value="55">
                  <p>index.tsx</p>
                </File>
              </Folder>
              <Folder value="56" element="simple-modal">
                <File value="57">
                  <p>index.tsx</p>
                </File>
              </Folder>
              <Folder value="58" element="otp-input">
                <File value="59">
                  <p>index.tsx</p>
                </File>
              </Folder>
              <Folder value="60" element="slider">
                <File value="61">
                  <p>index.tsx</p>
                </File>
              </Folder>
              <Folder value="62" element="spinner">
                <File value="63">
                  <p>index.tsx</p>
                </File>
              </Folder>
            </Folder>
            <Folder value="64" element="theme">
              <File value="65">
                <p>theme-provider.tsx</p>
              </File>
              <Folder value="66" element="navbar">
                <File value="67">
                  <p>navbar.tsx</p>
                </File>
              </Folder>
            </Folder>
            <Folder value="68" element="ui">
              <File value="69">
                <p>accordion.tsx</p>
              </File>
              <File value="70">
                <p>breadcrumb.tsx</p>
              </File>
              <File value="71">
                <p>card.tsx</p>
              </File>
              <File value="72">
                <p>collapsible.tsx</p>
              </File>
              <File value="73">
                <p>command.tsx</p>
              </File>
              <File value="74">
                <p>context-menu.tsx</p>
              </File>
              <File value="75">
                <p>drawer.tsx</p>
              </File>
              <File value="76">
                <p>empty.tsx</p>
              </File>
              <File value="77">
                <p>menubar.tsx</p>
              </File>
              <File value="78">
                <p>navigation-menu.tsx</p>
              </File>
              <File value="79">
                <p>select.tsx</p>
              </File>
              <File value="80">
                <p>sheet.tsx</p>
              </File>
              <File value="81">
                <p>table.tsx</p>
              </File>
              <File value="82">
                <p>tabs.tsx</p>
              </File>
              <File value="83">
                <p>toggle-group.tsx</p>
              </File>
            </Folder>
          </Folder>
          <Folder value="84" element="constants"></Folder>
          <Folder value="85" element="hooks"></Folder>
          <Folder value="86" element="icons"></Folder>
          <Folder value="87" element="schemas"></Folder>
          <Folder value="88" element="lib">
            <File value="89">
              <p>utils.ts</p>
            </File>
          </Folder>
        </Folder>
        <File value="90">
          <p>.eslintrc.json</p>
        </File>
        <File value="90">
          <p>.gitignore</p>
        </File>
        <File value="91">
          <p>next.config.ts</p>
        </File>
        <File value="92">
          <p>package.json</p>
        </File>
        <File value="93">
          <p>postcss.config.mjs</p>
        </File>
        <File value="94">
          <p>tailwind.config.ts</p>
        </File>
        <File value="95">
          <p>tsconfig.json</p>
        </File>
      </Tree>
    </div>
  );
}

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "src",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "app",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "global.css",
          },
          {
            id: "4",
            isSelectable: true,
            name: "layout.tsx",
          },
          {
            id: "5",
            isSelectable: true,
            name: "not-found.tsx",
          },
          {
            id: "6",
            isSelectable: true,
            name: "page.tsx",
          },
        ],
      },
      {
        id: "7",
        isSelectable: true,
        name: "components",
        children: [
          {
            id: "8",
            isSelectable: true,
            name: "forms",
            children: [
              {
                id: "9",
                isSelectable: true,
                name: "sign-in",
                children: [
                  {
                    id: "10",
                    isSelectable: true,
                    name: "index.tsx",
                  },
                ],
              },
              {
                id: "11",
                isSelectable: true,
                name: "sign-up",
                children: [
                  {
                    id: "12",
                    isSelectable: true,
                    name: "index.tsx",
                  },
                ],
              },
            ],
          },
          {
            id: "13",
            isSelectable: true,
            name: "global",
            children: [
              {
                id: "14",
                isSelectable: true,
                name: "accordion",
                children: [
                  {
                    id: "15",
                    isSelectable: true,
                    name: "index.tsx",
                  },
                ],
              },
              {
                id: "16",
                isSelectable: true,
                name: "backdrop-gradient",
                children: [
                  {
                    id: "17",
                    isSelectable: true,
                    name: "index.tsx",
                  },
                ],
              },
              {
                id: "18",
                isSelectable: true,
                name: "copy-button",
                children: [
                  {
                    id: "19",
                    isSelectable: true,
                    name: "index.tsx",
                  },
                ],
              },
              {
                id: "20",
                isSelectable: true,
                name: "drop-down",
                children: [
                  {
                    id: "21",
                    isSelectable: true,
                    name: "index.tsx",
                  },
                ],
              },
              {
                id: "22",
                isSelectable: true,
                name: "flip-link",
                children: [
                  {
                    id: "23",
                    isSelectable: true,
                    name: "index.tsx",
                  },
                ],
              },
              {
                id: "24",
                isSelectable: true,
                name: "grid-pattern",
                children: [
                  {
                    id: "25",
                    isSelectable: true,
                    name: "index.tsx",
                  },
                ],
              },
              {
                id: "26",
                isSelectable: true,
                name: "particles",
                children: [
                  {
                    id: "27",
                    isSelectable: true,
                    name: "index.tsx",
                  },
                ],
              },
              {
                id: "28",
                isSelectable: true,
                name: "rich-text-editor",
                children: [
                  {
                    id: "29",
                    isSelectable: true,
                    name: "slash-command.tsx",
                  },
                  {
                    id: "30",
                    isSelectable: true,
                    name: "index.tsx",
                  },
                  {
                    id: "31",
                    isSelectable: true,
                    name: "extensions.ts",
                  },
                  {
                    id: "32",
                    isSelectable: true,
                    name: "node-selector.tsx",
                  },
                  {
                    id: "33",
                    isSelectable: true,
                    name: "image.ts",
                  },
                  {
                    id: "34",
                    isSelectable: true,
                    name: "text-selector.tsx",
                  },
                ],
              },
              {
                id: "35",
                isSelectable: true,
                name: "skeleton",
                children: [
                  {
                    id: "36",
                    isSelectable: true,
                    name: "index.tsx",
                  },
                ],
              },
              {
                id: "37",
                isSelectable: true,
                name: "glass-sheet",
                children: [
                  {
                    id: "38",
                    isSelectable: true,
                    name: "index.tsx",
                  },
                ],
              },
              {
                id: "39",
                isSelectable: true,
                name: "search",
                children: [
                  {
                    id: "40",
                    isSelectable: true,
                    name: "index.tsx",
                  },
                  {
                    id: "41",
                    isSelectable: true,
                    name: "no-results.tsx",
                  },
                ],
              },
              {
                id: "42",
                isSelectable: true,
                name: "user-widget",
                children: [
                  {
                    id: "43",
                    isSelectable: true,
                    name: "index.tsx",
                  },
                  {
                    id: "44",
                    isSelectable: true,
                    name: "notification.tsx",
                  },
                ],
              },
              {
                id: "45",
                isSelectable: true,
                name: "glass-card",
                children: [
                  {
                    id: "46",
                    isSelectable: true,
                    name: "index.tsx",
                  },
                ],
              },
              {
                id: "47",
                isSelectable: true,
                name: "form-generator",
                children: [
                  {
                    id: "48",
                    isSelectable: true,
                    name: "index.tsx",
                  },
                ],
              },
              {
                id: "49",
                isSelectable: true,
                name: "gradient-text",
                children: [
                  {
                    id: "50",
                    isSelectable: true,
                    name: "index.tsx",
                  },
                ],
              },
              {
                id: "51",
                isSelectable: true,
                name: "loader",
                children: [
                  {
                    id: "52",
                    isSelectable: true,
                    name: "index.tsx",
                  },
                ],
              },
              {
                id: "53",
                isSelectable: true,
                name: "glass-modal",
                children: [
                  {
                    id: "54",
                    isSelectable: true,
                    name: "index.tsx",
                  },
                ],
              },
              {
                id: "55",
                isSelectable: true,
                name: "simple-modal",
                children: [
                  {
                    id: "56",
                    isSelectable: true,
                    name: "index.tsx",
                  },
                ],
              },
              {
                id: "57",
                isSelectable: true,
                name: "otp-input",
                children: [
                  {
                    id: "58",
                    isSelectable: true,
                    name: "index.tsx",
                  },
                ],
              },
              {
                id: "59",
                isSelectable: true,
                name: "slider",
                children: [
                  {
                    id: "60",
                    isSelectable: true,
                    name: "index.tsx",
                  },
                ],
              },
              {
                id: "61",
                isSelectable: true,
                name: "spinner",
                children: [
                  {
                    id: "62",
                    isSelectable: true,
                    name: "index.tsx",
                  },
                ],
              },
            ],
          },
          {
            id: "63",
            isSelectable: true,
            name: "constants",
          },
          {
            id: "64",
            isSelectable: true,
            name: "hooks",
          },
          {
            id: "65",
            isSelectable: true,
            name: "icons",
          },
          {
            id: "66",
            isSelectable: true,
            name: "schemas",
          },
          {
            id: "67",
            isSelectable: true,
            name: "lib",
            children: [
              {
                id: "68",
                isSelectable: true,
                name: "utils.ts",
              },
            ],
          },
        ],
      },
      {
        id: "69",
        isSelectable: true,
        name: ".eslintrc.json",
      },
      {
        id: "70",
        isSelectable: true,
        name: "next.config.ts",
      },
      {
        id: "71",
        isSelectable: true,
        name: "package.json",
      },
      {
        id: "72",
        isSelectable: true,
        name: "postcss.config.mjs",
      },
      {
        id: "73",
        isSelectable: true,
        name: "tailwind.config.ts",
      },
      {
        id: "74",
        isSelectable: true,
        name: "tsconfig.json",
      },
    ],
  },
];
