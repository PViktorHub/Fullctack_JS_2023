// Text of the article about Alan Turing
const fs = require('fs');
const path = require('path');



function callback(err, data){

    if (err) {
        console.error(err);
        return;
    }
    article = data;

    // Regular expression for collecting educational institutions
    const educationalInstitutionsRegex = /([A-Z][a-z]+('[A-Z][a-z]+)?(?: [A-Z][a-z]+)*)/g;
    let educationalInstitutions = article.match(educationalInstitutionsRegex);
    console.log("Educational Institutions:", educationalInstitutions);

    // Regular expression for collecting dates
    const datesRegex = /\b(?:\d{1,2} (?:January|February|March|April|May|June|July|August|September|October|November|December) \d{4})\b/g;
    let dates = article.match(datesRegex);
    console.log("\nDates:", dates);

    // Regular expression for collecting footnotes in square brackets
    const footnotesRegex = /\[\d+\]/g;
    let footnotes = article.match(footnotesRegex);
    console.log("\nFootnotes in square brackets:", footnotes);

    // Regular expression for collecting works in quotes
    const worksRegex = /"([^"]+)"/g;
    let works = article.match(worksRegex);
    console.log("\nWorks in quotes:", works);
}


let article;
// Читання з файлу
const filePath = path.join(__dirname, 'Task_14_Article.txt');
fs.readFile(filePath, 'utf8', callback);


