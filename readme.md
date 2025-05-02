# NodeJS Docker Skeleton

(2025) Get started with NodeJS and Docker.

* [Installation](#installation)

* [Usage](#usage)

* [Not Using Docker?](#not-using-docker)

* [Using PHP](#using-php)

* [Using [Python]](#using-python)

* [Contributing](#contributing)

* [License](#license)

## Installation

* [NodeJS](https://nodejs.org/en/)
* [Docker Compose](https://docs.docker.com/compose/install/).

```bash
npm install --global yarn
yarn install
```

## Usage

```bash
docker-compose up --build # to run on first time
docker-compose up --build -d # to run in background
docker-compose up # to run when file-changes have been made
```

<a name="not-using-docker"></a>
#### Not Using Docker?

```bash
yarn start
```

#### Reloading On File Changes

```bash
yarn dev
```

<a name="using-php"></a>
## Want to use PhP instead? 
[PhP Docker Skeleton](https://github.com/kkamara/php-docker-skeleton).

<a name="using-python"></a>
## Want to use Python instead? 
[Python Docker Skeleton](https://github.com/kkamara/python-docker-skeleton).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[BSD](https://opensource.org/licenses/BSD-3-Clause)
