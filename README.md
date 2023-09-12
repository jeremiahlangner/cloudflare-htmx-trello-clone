# HTMX Trello Clone

Not technically a fork, but a serverless implementation of the HTMX trello clone
(without pug) developed by rajasegar
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

For highly interactive HTMX applications, use a server.

## Usage

## Why No Tests (right now)?

This is a proof of concept project. I am actively architecting and developing it
in real time. Tests are very beneficial once an API has been cemented (i.e.
there has been a lot of adoption, or the parameters for use are well
established) while a project is still being designed, they will inhibit
productivity. I prefer a "design by doing" approach. I often will not know what
problems will need to be solved until I encounter them for a specific project.
TDD can't apply well in this situation.

https://grugbrain.dev/#grug-on-testing

## Attribution

This project is developed from code written by Rajasegar Chandran. He is
included as a copyright holder in the license per ISC specifications in the
original project. This code itself is not a direct fork.
