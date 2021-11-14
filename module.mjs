export export function getParameters(parName) {
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parName)
}