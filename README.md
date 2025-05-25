# Development Template Minecraft Bedrock Pack

This repository provides a ready-to-use development template of a Minecraft Bedrock pack, designed for easy adaptation and development.

## Features

- **Complete Pack**: Includes both a Behavior Pack and a Resource Pack with pre configured manifests.
- **Automation**: Build, development, and packaging scripts using `esbuild` and `archiver`.
- **Hot Reload**: Automatic reload support via `nodemon`.

## Project Structure

```
├── behavior_pack/         # Behavior Pack
├── resource_pack/         # Resource Pack
├── src/                   # Main Behavior source code (TypeScript)
├── .env.example           # Example environment configuration
```

## Installation

1. **Clone the repository**
2. **Install dependencies**:
   ```sh
   npm install
   ```
3. **Configure the environment**:
   - Copy `.env.example` to `.env` and adjust variables as needed.

## Usage

- **Development**:

  ```sh
  npm run dev
  ```

  Packs are automatically copied to the `com.mojang` folder for testing.

- **Build & Packaging**:
  ```sh
  npm run build
  ```
  Generates a `.mcaddon` file in `dist/` ready for import into Minecraft.

## NPM Scripts

- `dev`: Build and automatically copy packs to the Minecraft development folder
- `build`: Build and create the `.mcaddon` package
- `prettier:write`: Format code and JSON files

## Main Dependencies

- [`esbuild`](https://esbuild.github.io/)
- [`archiver`](https://www.npmjs.com/package/archiver)
- [`dotenv`](https://www.npmjs.com/package/dotenv)
- [`nodemon`](https://www.npmjs.com/package/nodemon)

## License

This project is licensed under the ISC License.
