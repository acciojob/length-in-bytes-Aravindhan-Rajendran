const byteSize = (str) => {
  // write your code here
	 const byteSize = (str) => {
  // Create a new Blob object with the string
  const blob = new Blob([str]);

  // Return the size of the Blob object, which is the byte size of the string
  return blob.size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
