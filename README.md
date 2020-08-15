# Lights, camera, action

[![vercel](https://badgen.net/badge/icon/Vercel?icon=zeit&label&color=black&labelColor=black)](https://lights-camera-action.vercel.app/) [![Twitter Follow](https://img.shields.io/twitter/follow/leozera?label=Follow%20on%20Twitter)](https://twitter.com/leozera/)

Small app created with create-react-app that uses [The Movie Database API](https://developers.themoviedb.org/). **[Live](https://lights-camera-action.vercel.app/)**

Tech details:

- TypeScript
- React concurrent mode
- Suspense and/or fetch for fetching data
- Tailwind CSS for design
- Deployed at Vercel

## Installing

- Clone the repo
- Create a `.env.local` file with a `REACT_APP_TMDB_API_KEY` variable. You can get an [API Key in the TMDB website](https://www.themoviedb.org/settings/api)
- Install dependencies: `yarn install`
- Start the show: `yarn start`