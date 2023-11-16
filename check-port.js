    import net from 'net';
    import { exec } from 'child_process';

    const port = process.argv[2] || 8080; // default to 8080 if not provided

    const server = net.createServer();

    server.once('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log(`Port ${port} is already in use, skipping beforeDevCommand.`);
        }
    });

    server.once('listening', () => {
        server.close();
        exec('pnpm run dev', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing beforeDevCommand: ${error}`);
                return;
            }
            console.log(stdout);
            console.error(stderr);
        });
    });

    server.listen(port);
