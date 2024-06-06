const books=[
{
	title:"to kill a mockingbird",
	author:"harper lee",
	year:1960
},
{
	title:"1984",
	author:"George Orwell",
	year:1949
},
{

	title:"the great gatsby",
	author:"f.scott fitzgerald",
	year:1925
},
{

title:"the catcher in the rye",
	author:"j.d salinger",
	year:1952
}

];
function displayBooks(){
	const bookList =document.getElementById("book-list")
	books.forEach (book=>{
		const bookDiv=document.createElement("div")
		bookDiv.classList.add("book");
	 
	 const bookTitle=document.createElement("h2")
	 bookTitle.textContent=book.title;
	 bookDiv.appendChild(bookTitle);

const bookAuthor=document.createElement("p")
bookAuthor.textContent=`Author:${book.author}`;
bookDiv.appendChild(bookAuthor);

const bookYear=document.createElement("p")
bookYear.textContent=`Published:${book.year}`;
bookDiv.appendChild(bookYear);

bookList.appendChild(bookDiv);

});
}
	document.addEventListener("DOMContentLoaded",displayBooks);


