function email(value) {
    if (/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/g.test(value)) {
        return true;
    };
    return false;
}