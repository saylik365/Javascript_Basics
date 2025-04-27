let books = [
    {
      bookname: "The Great Gatsby",
      genre: "Fiction",
      publishyear: 1980,
      edition: "1st"
    },
    {
      bookname: "To Kill a Mockingbird",
      genre: "Fiction",
      publishyear: 1960,
      edition: "1st"
    },
    {
      bookname: "1984",
      genre: "Dystopian",
      publishyear: 1949,
      edition: "2nd"
    },
    {
      bookname: "Moby-Dick",
      genre: "Adventure",
      publishyear: 1951,
      edition: "3rd"
    },
    {
      bookname: "Pride and Prejudice",
      genre: "Romance",
      publishyear: 1923,
      edition: "5th"
    }
  ];
  
//   console.log(books);
  const userbooks =books.filter((bk) => bk.genre==="Romance")//implicit return
  console.log(`By using implicit return and filter method :`,userbooks);
  console.log("\n")

  const userbooks1 = books.filter((bk1) => { //explicit return
    return bk1.genre === "Fiction"
  })
//console.log(`The Books under Fiction Genre are : ${userbooks1}`);//it will return [object,object]
  console.log(`By using explicit return and filter method :`,userbooks1);//will give correct output
  console.log("\n")


  //by using forEach
  const userbooks3 = []
  books.forEach((bk2)=>{
    if (bk2.genre === "Dystopian") {
        userbooks3.push(bk2)
    }
  })
  console.log(`By using forEach :`,userbooks3);
  console.log("\n")


  //give all the books published after 1950 and edition 1st
  const userbooks4 = books.filter((bk3) => bk3.publishyear > 1950 && bk3.edition ==="1st")
  console.log(`By using filter and publishyear greater than 1950 and edition 1st :`,userbooks4);

//to overwrite the previous declared variable, use let instead of const on the previously declared array and write variable name only on next declaration.

