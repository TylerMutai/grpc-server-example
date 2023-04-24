## grpc-contacts-server

A gRPC server implementation in node and typescript.

To run locally:

### Option 1:
This option does not provide support for gRPC-Web.
Adjust host in `values/globals.ts` accordingly.

1. Run `npm install`
2. Run `npm run dev`


### Option 2:
This option provides support for gRPC-Web by using envoy as a proxy server.
Adjust host in `values/globals.ts` accordingly.
Install docker & docker-compose:

1. For mac: Follow the instructions at: https://docs.docker.com/desktop/install/mac-install/
2. For windows, follow the instructions at: https://docs.docker.com/desktop/install/windows-install/
3. For linux, follow the instructions at: https://docs.docker.com/desktop/install/linux-install/

*_Ensure that you have no other applications running on the ports: 8080 and 5000_*
After you have your docker service running:

1. Clone this repository `git clone https://github.com/TylerMutai/grpc-server-example.git`
2. Navigate into the directory containing this repo `cd grpc-server-example`
3. Run `docker-compose up --build`
   The server should now be accessible at: http://localhost:8080/

The default predefined user accounts for login are:

```
[
    {
     "username":"admin",
     "password":"admin"
    },
    
    {
     "username":"staff",
     "password":"staff"
    }
]
```