// it just to inlustrate, it does'nt work
function recursiveFunction (someParams) {
  recursiveFunction(someParams)
}

//  it recursive too
function recursiveFunction1 (someParam) {
  recursiveFunction2(someParam)
}

function recursiveFunction2 (someParam) {
  recursiveFunction1(someParam)
}
