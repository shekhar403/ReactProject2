export const apiRead = async (setData) => {
    try {
        await fetch("https://crudcrud.com/api/f88f2b9482774755a4735a47d5fcc057/unicorns")
            .then(response => response.json())
            .then(d => {
                setData(d);
            })
    }
    catch (error) {
        console.log("Error:", error);
    }
}

export const apiPost = async (name, age, color) => {
    console.log("add")
    try {
        const response = await fetch("https://crudcrud.com/api/f88f2b9482774755a4735a47d5fcc057/unicorns", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                age: age,
                colour: color
            })
        })

        if (response.ok) {
            console.log("added successfully");
            apiRead()
        }
        else {
            console.log("Error adding user. Status:", response.status);
        }
    } catch (error) {
        console.log("Error:", error);
    }
};

export const apiDelete = async (p_id, setData) => {
    const url = `https://crudcrud.com/api/f88f2b9482774755a4735a47d5fcc057/unicorns/${p_id}`;

    try {
        const response = await fetch(url, {
            method: "DELETE"
        });

        if (response.ok) {
            console.log("User deleted successfully.");
            apiRead(setData);
        } else {
            console.log("Error deleting user. Status:", response.status);
        }
    } catch (error) {
        console.log("Error:", error);
    }
};

export const apiUpdate = async (id, name, age, color) => {
    const url = `https://crudcrud.com/api/f88f2b9482774755a4735a47d5fcc057/unicorns/${id}`;

    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                age: age,
                colour: color
            })
        })

        if (response.ok) {
            console.log("User updated successfully");
            apiRead();
        }
        else {
            console.log("Error updating user. Status:", response.status);
        }
    } catch (error) {
        console.log("Error:", error);
    }
};