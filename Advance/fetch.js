/* fetch is a method/global function which starts the process of fetching a resource from the n/w,
returning a promise which is fulfilled once a response is available 

the promise resolves to the response object representing to the response to your request.

IMP- A fetch promise only rejects when a network error is encountered which is usually when,
     there's a permission issue. A fetch promise does not reject on HTTP error like error 404
     Instead a .then() handler must check the response.ok and/or response.status properties.
     
     ** Read MDN Documentation ** */

/*
fetch - 2 types :
1) web browser/node API request handle - sends n/w request
2) to reserve data space in variables or memories - 
    2 arrays : onFulfilled[](this is promise resolve) and onrejection[](this is promise reject)
    it's responsibility is to fulfill the data and make the variable (like response) available in the global memory. 

*/ 

