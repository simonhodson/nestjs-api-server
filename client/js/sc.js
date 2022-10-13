function clicked() {
    socket.emit('events', { test: 'test' }, res => {
        console.log('RETURNED?')
        console.log(res);
    });
  
    socket.emit('identity', "ClientID-666-999-666", response =>
      console.log('Identity:', response),
    );
}

async function runDataFetch() {
  const blank = document.getElementById('blank');

  try {
    blank.innerText = await safeFetch();
  } catch (error) {
    console.log(error);
    return;
  }

}

async function safeFetch() {
  const data = await fetch('http://localhost:8080/');
  if (!data.ok) throw new Error('Failed to fetch');
  console.log(data.body)
  let res = await data.json();
  console.log(res)
  return res;
}