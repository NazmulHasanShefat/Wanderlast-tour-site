# Wanderlast tour website

# create js sniped
Go to your vs code
- press `Ctrl + Shift + P` and write `Preferences: Configure User Snippets`
- go to `javaScriptreact.json`/`javascriptreact` or when you using typeScript `typescriptreact.json`/`typescriptreact`

#### And paste this code
```json
{
  "React Next Page": {
    "prefix": "rsc",
    "body": [
      "export default function ${TM_FILENAME_BASE}() {", 
      "  return (",
      "    <>",
      "      $0",
      "    </>",
      "  );",
      "}"
    ],
    "description": "Next.js functional component with file name"
  }
}
```

### Your Output is
```js
export default function page() {
  return (
    <>
      
    </>
  );
}
```


if you want cursor auto place your function name then go to this setting
```json
{
  "React Next Page": {
    "prefix": "rsc",
    "body": [
      "export default function ${1:${TM_FILENAME_BASE}}() {",
      "  return (",
      "    <>",
      "      $0",
      "    </>",
      "  );",
      "}"
    ],
    "description": "Next.js functional component"
  }
}
```