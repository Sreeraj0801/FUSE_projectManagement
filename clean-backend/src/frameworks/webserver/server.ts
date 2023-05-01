import {Server } from 'http';
import configKeys from '../../config';

const serverConfig  = (server:Server) => {
    const startServer = () => {
        server.listen(configKeys.server.port , () => {
            console.log(`Server listening on Port   ${configKeys.server.port}`.bg_magenta)
        })
    }
    return {
        startServer 
    }
}


export default serverConfig 