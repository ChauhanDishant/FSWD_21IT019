function simulateAsyncOperation(callback) {
    setTimeout(() => {
        const result = "Hello World";
        callback(result);
    }, 1000);
}

simulateAsyncOperation((result) => {
    console.log("Received result:", result);
});

