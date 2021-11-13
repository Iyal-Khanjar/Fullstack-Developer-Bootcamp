function isMoreThenTen(number) {
    return new Promise(((resolve, reject) => {
        if (number > 10) resolve();
        reject();
    }))
}
isMoreThenTen(12).then(() => console.log('More Then Ten')).catch(() => console.log('Less Then Ten'))


