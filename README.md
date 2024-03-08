# Project Name

This project demonstrates a basic setup with Dependency Injection (DI), environment variable management, and an event-driven architecture.

## Getting Started

### Prerequisites

- Deno installed on your machine. Visit [https://deno.land/](https://deno.land/) for installation instructions.

### Installation

1. Clone the repository:
```shell
git clone git@github.com:Kenya-West/deno-starter.git
```

2. Navigate to the project directory:
```shell
cd deno-starter
```

3. Create `.env.local`, `.env.development`, `.env.production` files, like so in PowerShell:
```powershell
$envFiles = @(".env.local", ".env.development", ".env.production")

foreach ($file in $envFiles) {
    New-Item -Path "./$file" -ItemType "file" -Force
}
```


### Running the Application

To start the application, run the following command in your terminal:

```shell
deno task run:local
```

Make sure to grant the necessary permissions for Deno to access network and read environment files.

## Using the Application

Once the application is running, it initializes the DI service and loads environment variables before launching. The project structure is designed to easily add new services and dependencies using the DI pattern.

### Adding a New Service

To add a new service:

1. Create a new service file under the \`services/\` directory.
2. Update the \`di-deps.model.ts\` file to include your new service in the \`DepsAsArray\` and \`Deps\` interface.

### Accessing Environment Variables

Environment variables are managed using \`dotenv\` files. Based on the \`NODE_ENV\` environment variable, different \`.env\` files can be loaded (e.g., \`.env.production\`, \`.env.development\`).

## Debugging

You can debug the application by inserting breakpoints or using console logs. Deno also supports more sophisticated debugging options that can be explored in the Deno documentation.

## Managing Environment Variables (.env files)

- Create a \`.env\` file for each environment (e.g., \`.env.development\`, \`.env.production\`) in the root directory.
- Define your environment variables inside these files.
- The application will automatically load the variables from the corresponding \`.env\` file based on the \`NODE_ENV\` value.

## Contributing

Feel free to fork the repository and submit pull requests.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.