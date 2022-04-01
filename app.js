function showError(message, code) {
    throw { message: message, code: code };
    // console.log('Hey am Here')
}
showError('Page not found', 404);
