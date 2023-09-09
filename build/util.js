function hash(_hashes) {
    let h = "";
    while (_hashes[h])
        h = Math.random().toString(16).substring(2, 15);
    return h;
}
const HTMLResponseOptions = {
    headers: {
        "content-type": "text/html;charset=UTF-8",
    },
};
export { hash, HTMLResponseOptions };
