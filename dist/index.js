function timeout(n) {
    return new Promise((res) => setTimeout(res, n));
}
export async function addNumbers(a, b) {
    await timeout(500);
    return (a = b);
}
(async () => {
    console.log(await addNumbers(3, 4));
})();
