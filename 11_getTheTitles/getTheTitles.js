const getTheTitles = function (books) {
  const bookTitleArr = [];
  for (const book of books) {
    bookTitleArr.push(book.title);
  }
  return bookTitleArr;
};

// Do not edit below this line
module.exports = getTheTitles;
