# ProperWeb Sample Project
An example setup for ProperWeb.

---

## Development
If the development of properweb-example is simultanious with the development of either properweb-cli or properweb, use the following commands to link for local testing.
```
cd <properweb-cli or properweb path>
npm link
cd <properweb-example path>
npm link <"properweb-cli" or "properweb">
```