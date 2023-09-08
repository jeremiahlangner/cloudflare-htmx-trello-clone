# HTMX Trello Clone

A serverless implementation of the HTMX trello clone developed by rajasegar (github.com/rajasegar/htmx-trello).

## Demo

Online now at [https://trello-clone.jeremiahlangner.workers.dev](https://trello-clone.jeremiahlangner.workers.dev).

## Why

rajasegar's Heroku instance of this server example for HTMX with node.js is down. I don't believe HTMX needs a server so much as "state storage". That is, the backend should represent the state. In this case, I'm using Cloudflare's KV storage and may switch to Durable Objects for consistency's sake.

## Usage

## Why No Tests (right now)?

This is a proof of concept project. I am actively architecting and developing it in real time. Tests are very beneficial once an API has been cemented (i.e. there has been a lot of adoption, or the parameters for use are well established) while a project is still being designed, they will inhibit productivity. I prefer a "design by doing" approach. I often will not know what problems will need to be solved until I encounter them for a specific project. TDD can't apply well in this situation.

## Attribution

This project is developed from code written by Rajasegar Chandran. He is included as a copyright holder in the license per ISC specifications in the original project. This code itself is not a direct fork.
