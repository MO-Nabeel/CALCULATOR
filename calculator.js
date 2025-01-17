function display(num) {
    output.value+=num
}
function clearall() {
    output.value=''
}
function equal() {
    try {
        output.value=eval(output.value)
    } catch{
        output.value='error'
        setTimeout(() => {
            output.value=''
        }, 2000);
    }
}
