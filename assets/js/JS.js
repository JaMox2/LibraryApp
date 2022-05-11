
function BookObject(title, author, pages, haveRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.haveRead = haveRead
}
class Library{
    constructor(){
        this.removeBtn = document.querySelector('.remove')
        this.addBookBtn = document.getElementById('addBooks')
        this.submitBtn = document.getElementById('submit')

        this.addBookInputs = document.getElementById('gray-Filter')
        this.msg = document.querySelector('.message')

        this.bookList = []


    }
    remove(){
        // this.removeBtn.addEventListener('click', () =>{
        //     console.log('remove')

        // })
    }
    checkIfBookIsThere(bookTitle){
        let value = true
        this.bookList.forEach( (x, i) =>{
            if(this.bookList[i].title == bookTitle){
                console.log("THIS IS THERE")
                value = false
            }else {
                console.log("THIS IS NOT THERE THERE")
                value = true
            }
        })
        return value
    }
    displayBooks(titleParameter, authorParameter, pagesParameter, haveRaedParameter){
        let booksContainer = document.querySelector('.books-container')

        //book div
        let book = document.createElement("div")
        book.classList.add('book')

        //title
        let title = document.createElement("span")
        title.classList.add('title')
        //author
        let author = document.createElement("span")
        author.classList.add('author')
        //pages
        let pages = document.createElement("span")
        pages.classList.add('pages')
        //readOrNot
        let readOrNot = document.createElement("a")
        //remove
        let removeBtn = document.createElement("a")
        removeBtn.classList.add('remove')

        booksContainer.appendChild(book)
        
        book.appendChild(title)
        title.innerText = titleParameter
        book.appendChild(author)
        author.innerText = authorParameter
        book.appendChild(pages)
        pages.innerText = `Pages : ${pagesParameter}`
        if(haveRaedParameter){
            readOrNot.classList.add('read')
            book.appendChild(readOrNot)
            readOrNot.innerText = 'Read'
            book.appendChild(removeBtn)
            removeBtn.innerText = 'Remove'
        }else{
            readOrNot.classList.add('notRead')
            book.appendChild(readOrNot)
            readOrNot.innerText = 'Read'
            book.appendChild(removeBtn)
            removeBtn.innerText = 'Remove'
        }
        
        
    }
    addBook(){
        this.addBookBtn.addEventListener('click', () =>{
            console.log("displaying")
            this.addBookInputs.style.display = 'block'
        })

        this.submitBtn.addEventListener('click', () =>{
            this.msg.style.bottom = '-25%'
            this.msg.style.opacity = '0'
            let titleValue = document.getElementById('title')
            let authorValue = document.getElementById('author')
            let pagesValue = document.getElementById('pages')
            let checkBoxValue = document.getElementById('no-yes')
            if(titleValue.value.length > 0 && authorValue.value.length > 0 && pagesValue.value.length){
                console.log(titleValue.value)
                
                if(this.checkIfBookIsThere(titleValue.value) == true){
                    console.log("THIS RAN")
                    let newBook = new BookObject(titleValue.value, authorValue.value, pagesValue.value, checkBoxValue.checked)
                    console.log(newBook)
                    this.bookList.push(newBook)
                    this.addBookInputs.style.display = 'none'

                    this.displayBooks(titleValue.value, authorValue.value, pagesValue.value, checkBoxValue.checked)

                    titleValue.value = ''
                    authorValue.value = ''
                    pagesValue.value = null
                    checkBoxValue.checked = false
                    console.log(this.bookList)
                }
                else{
                    console.log("NOT RUNNNIIGNG")
                    this.msg.style.bottom = '0%'
                    this.msg.style.opacity = '1'
                }
            }
        })
    }
}





// let newBook = new BookObject('dfd', 'dfd', 343, false)
let libraryOpperator = new Library()
libraryOpperator.remove()
libraryOpperator.addBook()