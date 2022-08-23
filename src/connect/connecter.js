const url = "https://candidate.neversitup.com/todo/todos"
export const getData = (addingfunc) =>{
    const option={
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: "jim@mail.com",
            password: "123456789",
        }),
    }
    fetch("https://candidate.neversitup.com/todo/users/auth",option)
    .then(res=>res.json())
    .then((data)=>{
        const option2 = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": data.token,
            }
        }
        fetch(url ,option2)
        .then(res=>res.json())
        .then((data)=>{
            addingfunc(data) 
        })
    })
}

/* Add */ 
export const addData = ( state) =>{
    const option={
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: "jim@mail.com",
            password: "123456789",
        }),
    }
    fetch("https://candidate.neversitup.com/todo/users/auth",option)
    .then(res=>res.json())
    .then((data)=>{
        const option2 = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": data.token,
            },
            body: JSON.stringify(state),
        }
        fetch(url ,option2)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
        })
    })
}

/* update */
export const updateData = (id, state) =>{
    const option={
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: "jim@mail.com",
            password: "123456789",
        }),
    }
    fetch("https://candidate.neversitup.com/todo/users/auth",option)
    .then(res=>res.json())
    .then((data)=>{
        const option2 = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": data.token,
            },
            body: JSON.stringify({
                title: state
            }),
        }
        fetch(`${url}/${id}` ,option2)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
        })
    })
}

/* Delete */
export const deleteData = (id) =>{
    const option={
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: "jim@mail.com",
            password: "123456789",
        }),
    }
    fetch("https://candidate.neversitup.com/todo/users/auth",option)
    .then(res=>res.json())
    .then((data)=>{
        const option2 = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": data.token,
            }, 
        }
        fetch(`${url}/${id}` ,option2)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
        })
    })
}