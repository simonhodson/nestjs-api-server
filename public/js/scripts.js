async function onButtonClick() {
    try {
        let promise = await fetch('app.lqtest://home');
        if (promise.ok) {
            const res = await promise.text();
            console.log(res);
        } else {
            console.error('Error with HTTP request');
        }
    } catch (err) {
        console.error('CAUGHT ', err);
    }
}

/*
    try {
        let promise = await fetch('http://localhost:8080/hello');
        if (promise.ok) {
            const res = await promise.text();
            console.log(res);
        } else {
            console.error('Error with HTTP request');
        }
    } catch (err) {
        console.error('CAUGHT ', err);
    }
*/
