# bolyaiwtf frontend

This is a Vue application. It uses an API endpoint from sallai.me to fetch the messages.

## Getting Started

Clone the repo:

```sh
git clone git@github.com:jozsefsallai/bolyaiwtf-frontend
cd bolyaiwtf-frontend
```

Install the dependencies:

```sh
npm i -g yarn
yarn
```

## Build & Watch

```sh
yarn build    # to build the static assets
yarn watch    # to hot-reload the frontend
```

## Production and Deployment

Deployment is done on Netlify. Use this command to build for production:

```sh
NODE_ENV=production yarn build
```

## License

MIT.
