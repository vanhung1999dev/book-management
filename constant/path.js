module.exports.list_unauthenticate_path = [
    ["GET,/login"]
];

module.exports.list_permision= [

    //account permision
    ["POST,/accounts",1],
    ["GET,/accounts/(\d+)",2],
    ["GET,/accounts",3],
    ["UPDATE,/accounts/(\d+)",4],
    ["DELETE,'accounts/(\d+)",5]

    //author permision
    ["POST,/authors",6],
    ["GET,/authors/(\d+)",7],
    ["GET,/authors",8],
    ["UPDATE,/authors/(\d+)",9],
    ["DELETE,'authors/(\d+)",10]

    //book permision 
    ["POST,/books",11],
    ["GET,/books/(\d+)",12],
    ["GET,/books",13],
    ["UPDATE,/books/(\d+)",14],
    ["DELETE,'books/(\d+)",15]

    //catelog permision
    ["POST,/catelogs",16],
    ["GET,/catelogs/(\d+)",17],
    ["GET,/catelogs",18],
    ["UPDATE,/catelogs/(\d+)",19],
    ["DELETE,'catelogs/(\d+)",20]

    
]