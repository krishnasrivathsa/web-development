function strcmp(a, b) {
    var proGrad_1 = process.argv[2];
    var proGrad_2 = process.argv[3];
    if (proGrad_1 === proGrad_2) {
        process.stdout.write(`What?! You both have the same name?`);
    }

    if (proGrad_1 > proGrad_2) {
        process.stdout.write(`Yo, the navigator goes first definitely.`);

    }
    else
        process.stdout.write(`The driver's name goes first.`);
}
strcmp();