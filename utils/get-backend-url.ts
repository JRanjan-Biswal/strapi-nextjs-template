export function getBackendUrl() {
    return process.env.BASE_URL ?? "http://localhost:1337";
}