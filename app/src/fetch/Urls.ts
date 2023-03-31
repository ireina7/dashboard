import { config } from '../utils/Config';

const backend = config.backendHost + ":" + config.backendPort;
export const urls = {
    backend: backend,
    submit: backend + "/submit",
    blogHeaders: backend + "/blogs",
    blog: backend + "/blog",
};
