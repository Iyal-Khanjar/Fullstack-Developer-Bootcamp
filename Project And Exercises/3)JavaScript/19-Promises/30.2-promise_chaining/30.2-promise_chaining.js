const arrayOfWords = ["cucumber", "tomatos", "avocado"];

const makeAllCaps = (arrayOfWords) => {
    return new Promise(((resolve, reject) => {
        let capsString = arrayOfWords.map((item) => {
            return typeof item === "string" ? item.toUpperCase() : reject('error : not all items are string')
            // if(typeof item === "string"){
            //     return item.toUpperCase()
            // }
            // reject('error : not all items are string')
        })
        resolve(capsString)
    }))
}

const sortStrings = (stringArr) => {
    return new Promise(((resolve, reject) => {
        if (stringArr) {
            let capsString = stringArr.map((item) => {
                return typeof item === "string" ? item : reject('error : not all items are string')
                // if(typeof item === "string"){
                //     return item.toUpperCase()
                // }
                // reject('error : not all items are string')
            })
            resolve(capsString.sort())
        }
        reject('empty array')
    }))
}

makeAllCaps(arrayOfWords).then((output) => {
    sortStrings(output).then((data) => {
        console.log(data)
    }).catch((error) => {
        console.log(error)
    })
}).catch((err) => {
    console.log(err)
})
