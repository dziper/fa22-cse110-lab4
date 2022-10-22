var lastPrint = new Date();
while (true) {
    let d = new Date();

    if (d - lastPrint > 1000) {
        let time = d.toLocaleTimeString();
        console.log(time);
        lastPrint = new Date();
    }
}