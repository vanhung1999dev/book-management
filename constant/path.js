
const list_permision = [
    //user permision
    { path: "^POST,/users$", id_permision: 1 },
    { path: "^GET,/users/[0-9]+$", id_permision: 2 },
    { path: "^GET,/users$", id_permision: 3 },
    { path: "^PUT,/users/[0-9]+$", id_permision: 4 },
    { path: "^DELETE,/users/[0-9]+$", id_permision: 5 },

    //author permision
    { path: "^POST,/authors$", id_permision: 6 },
    { path: "^GET,/authors/[0-9]+$", id_permision: 7 },
    { path: "^GET,/authors$", id_permision: 8 },
    { path: "^PUT,/authors/[0-9]+$", id_permision: 9 },
    { path: "^DELETE,/authors/[0-9]+$", id_permision: 10 },

    //book permision 
    { path: "^POST,/books$", id_permision: 11 },
    { path: "^GET,/books/[0-9]+$", id_permision: 12 },
    { path: "^GET,/books$", id_permision: 13 },
    { path: "^PUT,/books/[0-9]+$", id_permision: 14 },
    { path: "^PUT,/book/[0-9]+/approved$", id_permision: 15 },
    { path: "^DELETE,/books/[0-9]+$", id_permision: 16 },

    //catelog permision
    { path: "^POST,/catelogs$", id_permision: 17 },
    { path: "^GET,/catelogs/[0-9]+$", id_permision: 18 },
    { path: "^GET,/catelogs$", id_permision: 19 },
    { path: "^PUT,/catelogs/[0-9]+$", id_permision: 20 },
    { path: "^DELETE,/catelogs/[0-9]+$", id_permision: 21 },

    //account permision
    { path: "^POST,/accounts$", id_permision: 22 },
    { path: "^GET,/accounts/[0-9]+$", id_permision: 23 },
    { path: "^GET,/accounts$", id_permision: 24 },
    { path: "^PUT,/accounts/[0-9]+$", id_permision: 25 },
    { path: "^DELETE,/accounts/[0-9]+$", id_permision: 26 },

    //grant permision
    { path: "^POST,/permisions/[0-9]+$", id_permision: 27 }

]
module.exports = list_permision;