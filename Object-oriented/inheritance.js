
//prototype inheritance

const user = {
    name: "Sayli",
    email: "sayli123@gmail.com"
}

const teacher = {
    makevideo : true
}

const teachingSupport ={
    isAvailable: false
}

const TAsupport={
    makeAssignment: 'JS Assignment',
    fulltime : true,
    __proto__: teachingSupport // setting prototype to teachingSupport
    // this is how we can set prototype in an object
}

//modern syntax to set the prototype of an object
Object.setPrototypeOf(teachingSupport, teacher)