# SvelteKit Tailwind with Tauri

This project leverages the best of modern web and desktop development by integrating [SvelteKit](https://kit.svelte.dev/), [Tailwind CSS](https://tailwindcss.com/), and [Tauri](https://tauri.app/). SvelteKit provides a seamless development experience and efficient build optimization. Tailwind CSS uses a utility-first approach for rapid and maintainable UI development. Tauri binds it all together into a lightweight, cross-platform desktop application that can target Windows, macOS, Linux, Android, and iOS.

## Prerequisites

- [Node.js](https://nodejs.org/) - Ensure Node.js is installed on your system.
- [Rust](https://www.rust-lang.org/) - Install Rust using [rustup](https://rustup.rs/).
- Platform-specific dependencies for Tauri:
  - **iOS/Android**: Xcode, Android Studio, and related SDKs.
  - **Windows/macOS/Linux**: Ensure build tools for your platform are installed.

## Installation

Use `pnpm` for efficient and fast package management. If `pnpm` is not installed:

```bash
npm install -g pnpm
```

## Setting Up the Project

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/sveltekit-tailwind-tauri
cd sveltekit-tailwind-tauri
pnpm i
```

## Development

### Platform Initialization

Before running the application, initialize the platform you're targeting:

- **iOS**:
  ```bash
  pnpm tauri ios init
  ```
- **Android**:
  ```bash
  pnpm tauri android init
  ```
- **Windows/macOS/Linux**:
  ```bash
  # No initialization needed, directly run:
  pnpm tauri dev
  ```

### Running the Application

After initialization, to run the application in development mode:

- **iOS**:
  ```bash
  pnpm tauri ios dev
  ```
- **Android**:
  ```bash
  # Make sure to have an emulator running or a device connected
  pnpm tauri android dev
  ```
- **Windows/macOS/Linux**:
  ```bash
  pnpm tauri dev
  ```

## License

This project is open-sourced under the [MIT License](./LICENSE).

---

Refer to the official documentation for detailed guidance:

- [SvelteKit Documentation](https://kit.svelte.dev/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tauri Documentation](https://tauri.app/)
