function greet(name) { 
 return name || "Guest"; 
} 
test('returns Guest when name is empty', () => { 
 // Arrange 
 const name = "Adeline"; 
 // Act 
 const result = greet(name)
 // Assert 
 expect(result).toBe("Adeline"); 
}); 


function toggle(value) { 
 return !value; 
}
test('toggles boolean value', () => {  // Arrange 
 const input =2000;
 // Act 
 const result =toggle(input);
 // Assert 
 expect(result).toBe(False);//if the input value is true                  then the expected value is false and verse versa
});


function addItem(arr, item) { 
 arr.push(item); 
 return arr; 
} 
test('adds item to array', () => {  // Arrange 
 const arr =[1,2,3,4]; 
 // Act 
 const result =addItem(arr, 5); 
 // Assert 
 expect(result).toEqual([1,2,3,4,5]); }); 

function removeItem(arr, item) {
    return arr.filter(i => i !== item); } 
test('removes item from array', () => {  // Arrange 
 const arr =[3,4,5,6];
 // Act 
 const result =removeItem(arr, 5); 
 // Assert 
 expect(result).toEqual([3,4,6]); 
});

function isValidPassword(password) { 
 return password.length >= 6; 
} 
test('returns true for valid password length', () => {  // Arrange 
 const password = "078@as";
 // Act 
 const result =isValidPassword(Password); 
 // Assert 
 expect(result).toBe(True); 
});


function isValidPassword(password) { 
 return password.length >= 6; 
}
test("returns true for valid password length", () => { // arrange
    //act 
    const password ="oliohd12";
    // assert
    expect(result).toBe(True);
});

function isValidPassword(password) { 
 return password.length >= 6; 
}
test("returns true for valid password length", () => { // arrange
    //act 
    const password ="oli";
    // assert
    expect(result).toBe(false);
});

function isValidPassword(password) { 
 return password.length >= 6; 
}
test("returns true for valid password length", () => { // arrange
    //act 
    const password ="oo";
    // assert
    expect(result).toBe(false);
});


function isValidPassword(password) { 
 return password.length >= 6; 
}
test("returns true for valid password length", () => { // arrange
    //act 
    const password ="aaaaaaaaaaaaaa...";
    // assert
    expect(result).toBe("invalid");
});

function isValidPassword(password) { 
 return password.length >= 6; 
}
test("returns true for valid password length", () => { // arrange
    //act 
    const password =" ";
    // assert
    expect(result).toBe(false);
});

function containsWord(sentence, word) {  
    return sentence.includes(word); } 
test("returns sentence", () => { // arrange
    // act
    const sentence = "I know";
    const result= (sentence, "him");
    //assert
    expect(result).toBe(false);
});

function containsWord(sentence, word) {  
    return sentence.includes(word); } 
test("returns sentence", () => { // arrange
    // act
    const sentence = "I meet with him";
    const result= constainWord(sentence, "him");
    //assert
    expect(result).toBe(true);
});

function containsWord(sentence, word) {  
    return sentence.includes(word); } 
test("returns sentence", () => { // arrange
    // act
    const sentence = "he works at the bar";
    const result = containWord(sentence, "I");
    //assert
    expect(result).toBe(false);
});

function containsWord(sentence, word) {  
    return sentence.includes(word); } 
test("returns sentence", () => { // arrange
    // act
    const sentence = "I know where you can find the way";
    const result = containWord(sentence, "find");
    //assert
    expect(result).toBe(true);
});


function containsWord(sentence, word) {  
    return sentence.includes(word); } 
test("returns sentence", () => { // arrange
    // act
    const sentence = "he works at the bar";
    const result = containWord(sentence, "at");
    //assert
    expect(result).toBe(true);
});

function containsWord(sentence, word) {  
    return sentence.includes(word); } 
test("returns sentence", () => { // arrange
    // act
    const sentence = "she has been the hero since the day one";
    const result = containWord(sentence, "I");
    //assert
    expect(result).toBe(false);
});


function addItem(arr, item) { 
 arr.push(item); 
 return arr; 
} 
//arrange
test("returns the item added in the array", () => {
    //act
    const arr = [1,2,3,4];
    const result = addItem(arr, 5);
    //assert
    expect(result).toBe([1,2,3,4,5]);
});


test("returns the item added in the array", () => {
    //act
    const arr = [0,2,3,4];
    const result = addItem(arr, 8);
    //assert
    expect(result).toBe([0,2,3,4,8]);
});

st("returns the item added in the array", () => {
    //act
    const arr = [1,2,3,4];
    const result = addItem(arr, 10);
    //assert
    expect(result).toBe([1,2,3,4,10]);
});


st("returns the item added in the array", () => {
    //act
    const arr = [5,6,3,4];
    const result = addItem(arr, 4);
    //assert
    expect(result).toBe([4,6,3,4,5]);
});