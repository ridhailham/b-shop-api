const books = [
    {id: 1, title: 'node js ', description: 'learning express js'},
    {id: 2, title: 'python ', description: 'learning python'},
    {id: 3, title: 'golang', description: 'learning golang'},
]

const findAllBooks = (req, res) => {
    const data = books
    
    const result = {
        status: 'ok',
        data: data
    }

    res.json(result)
}


const getBooksById = (req, res) => {
    const id = req.params.id

    let book 
    for(let i = 0; i < books.length; i++) {
        if(books[i].id === Number(id)) {
            book = books[i]
        }
    }

    if(book === undefined) {
        res.status(404).json({
            massage: "kosong"
        })
        return
    }

    res.json({
        status: 'ok',
        data:book
    })
}

module.exports = { findAllBooks, getBooksById }