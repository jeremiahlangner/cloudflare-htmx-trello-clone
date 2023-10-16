import { html } from "../util";
import json from "./styles.json" assert { type: "json" };

const styles = json.styles;

const NoSW = html`
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>HTMX Trello Clone</title>
      <style>
        ${styles}
      </style>
      <script>
        function reload(state) {
          state.onstatechange = () => {
            if (
              ["installed", "activating", "activated"].indexOf(state.state) > -1
            ) {
              window.location.reload();
            }
          };
        }

        async function registerServiceWorker() {
          if ("serviceWorker" in navigator) {
            try {
              const registration = await navigator.serviceWorker.register(
                "/sw.js",
                {
                  scope: "/",
                  type: "module",
                },
              );
              if (registration.installing) {
                console.log("Service worker installing");
                reload(registration.installing);
              } else if (registration.waiting) {
                console.log("Service worker installed");
                reload(registration.waiting);
              } else if (registration.active) {
                console.log("Service worker active");
                location.reload();
              }
            } catch (error) {
              console.error("Registration failed with" + error);
            }
          }
        }
        registerServiceWorker();
      </script>
    </head>
    <body>
      <div
        class="app"
        style="text-align: center; display: flex; justify-content: center; align-items: center; color: white;"
      >
        Loading...
      </div>
    </body>
  </html>
`;

export default NoSW;
