function Dispmess() {
    return new Promise((resolved) => {
        setTimeout(() => {
            resolved(" Promised Successfull!");
        }, 2000);
    });
}
const firstfun = async function () {
    const result = await Dispmess();
    console.log("Successfull! function 1", result);
}
const scndtfun = async function () {
    const result = await Dispmess();
    console.log("Successfull! function 2", result);
}

firstfun();
scndtfun();