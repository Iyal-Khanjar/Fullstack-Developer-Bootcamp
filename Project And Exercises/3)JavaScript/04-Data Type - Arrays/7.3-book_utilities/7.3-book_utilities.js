const bookPower = {
    name: 'Power',
    author: 'Iyal',
    year: 2019,
    publisher:{
        publishLocation:"hhh",
        publisherName:"fxfx"
    }
}

const bookKind = {
    name: 'Kind',
    author: 'Ilan',
    year: 2020,
    publisher:{
        publishLocation:"hhh",
        publisherName:"fxfx"
    }
}

const bookUtils = {}
bookUtils.getFirstPublished = function (bookPower, bookKind) {
    return Math.min(bookPower.year, bookKind.year);
}
bookUtils.setNewEdition = function (book, editionYear) {
    editionYear = 2021
    book.latestEdition = 2021;
}
bookUtils.setLanguage = function (book, language) {
    language = 'English'
    book.language = language
}
bookUtils.setTranslation = function (book, language, translator) {
    language = 'English'
    translator = 'Hebrew'
    book.translation = {
        language: language,
        translator: translator
    }
}
bookUtils.setPublisher = function (book, name, location) {
    name = "Iyal"
    location = "Julis"
    book.publisher = {
        name: name,
        location: location
    }
}
bookUtils.isSamePublisher = function (b1, b2) {
    return (b1.publisher.publishLocation===b2.publisher.publishLocation && b1.publisher.publisherName===b2.publisher.publisherName)
}
console.log(bookUtils.getFirstPublished(bookKind,bookPower));
console.log(bookPower);
console.log(bookKind);
console.log(bookUtils.isSamePublisher(bookPower, bookKind));