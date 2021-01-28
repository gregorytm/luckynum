function snakeToCamel(phrase) {
   let words = phrase.split("_")
    let camel = words.map((word, index) => {
        if (index === 0) {
            return word
        } else {
            let firstLetter = word[0].toUpperCase()
            let restOfWord = word.slice(1)
            return firstLetter + restOfWord
        }
    })
    return camel.join("");
}