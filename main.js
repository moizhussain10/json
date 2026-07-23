fetch('data.json')
    .then((res) => res.json())
    .then((data) => {
        let user = ""

        data.forEach((u) => {
            user += `
                <h2>ID : ${u.id} </h2>
                <h2>NAME : ${u.name} </h2>
                <h2>AGE : ${u.age} </h2>
            `
            document.getElementById("data").innerHTML = user
        });
    })


