fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => {
        let user = ""

        data.products.forEach((u) => {
            user += `
            
                <div class="card">
                    <div class="img">
                        <img src="${u.images[0]}" alt="">
                    </div>
                <div class="content">
                    <h3>${u.id}</h3>
                    <h3>${u.title}</h3>
                    <h5>price:- ${u.price}</h5>
                </div>
                </div>
            `
        });
        document.getElementById("data").innerHTML = user
    })


