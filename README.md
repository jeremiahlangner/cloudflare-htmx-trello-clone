# HTMX Trello Clone

A serverless implementation of the HTMX trello clone developed by rajasegar.

[https://github.com/rajasegar/htmx-trello](https://github.com/rajasegar/htmx-trello)

## Demo

[https://trello-clone.jeremiahlangner.workers.dev](https://trello-clone.jeremiahlangner.workers.dev)

## Why

This is a simple application to implement with enough complexity to learn how
HTMX interacts while flexing some stiff serverless muscles in a slightly
different serverless paradigm than my daily driver (AWS). This particular
architecture/stack is not necessarily recommended.

rajasegar's Heroku instance of this server example for HTMX with node.js is
down. I don't believe HTMX _needs_ a server so much as "state storage" and
"content delivery" mechanisms (and in almost all cases, for HTMX applications, a
server is more beneficial for both the developer and the user than a serverless
implementation). That is, the backend should represent the state. In this case,
I'm using Cloudflare's KV storage and may switch to Durable Objects for
consistency's sake.

## Why Not

HTMX over serverless requires several implementations that are neither
performant nor advantageous (for the individual/company developing and
administering the application; the user will notice little difference). Because
HTMX utilizes route/method based server access to update the client state it
incurs a large request penalty on the serverless backend.

As with this application, I recommend using a service worker as a backend to
serve the state and requests for HTMX.

## Usage

For development, clone the repository, navigate to the repo locally, run
`npm install`, update the wrangler.toml file with your values, and run
`wrangler dev`.

To try it out, navigate to the app in your browser at
[https://trello-clone.jeremiahlangner.workers.dev](https://trello-clone.jeremiahlangner.workers.dev).

The application loads a service worker and can function offline until any
updates are necessary.

To save your board data to the remote database click "save" in the upper-right
corner.

To download the data from the remote database click "sync" in the upper right
corner.

## Attribution

This project is developed from code written by Rajasegar Chandran. He is
included as a copyright holder in the license. This is not a direct fork, but
most of his code is included in the worker scripts.
