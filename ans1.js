let book = new Object();

book = { 
    author: "John Red Doe",
    title: "Mr.RED has a red and a green car",
    images: {
        url: "https://dummy.com/red-image.jpg",
    }
};

book = JSON.stringify(book);

book = book.replace(/red/gi,"blue");

book = JSON.parse(book);

console.log(book);

