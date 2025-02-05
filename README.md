# cbbd
This API is in limited Beta for Patreon subscribers. It may have bugs and is subject to changes. API keys can be acquired from the CollegeBasketballData.com website.

This TypeScript package is automatically generated by the [Hey API](https://heyapi.vercel.app/) project:

- API version: 1.6.0
- Package version: 1.6.1

## Requirements.

Node 18+

## Installation
### npm install

```sh
npm install cbbd
```

### yarn install

```sh
yarn add cbbd
```

### pnpm install

```sh
pnpm add cbbd
```

## Usage

### Authorization

To authorize requests, use the `setConfig` method to set the `Authorization` header using your personal API key. API keys can be acquired from the CollegeBasketballData.com website.

```typescript
import { client } from 'cbbd';

client.setConfig({
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
    }
});

```

### Example Usage

All API operations can be imported from the `cbbd` package and used as shown below.

```typescript
import { client, getGames } from 'cbbd';

// Set up the client with your API key
client.setConfig({
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
    }
});

// Call the getGames endpoint
const games = await getGames({
    query: {
        season: 2025,
    },
});

for (const game of games.data ?? []) {
    // Do something with the game data
    // For example:
    console.log(`${game.awayTeam} vs ${game.homeTeam} - ${game.excitement}`);
}
```

## Author

admin@collegefootballdata.com


