function clickSomeElement() {
    return someTextElement.getText().then(text => {
        return getElelementByText(text).then(element => {
            return element.click();
        });
    });
}


function clickSomeElement2() {
    // fix me please
    return someTextElement.getText().then(text => {
        return getElelementByText(text).then(element => {
            return element.click();
        });
    });
}