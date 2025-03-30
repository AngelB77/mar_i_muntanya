const handleLogin = async (username, password) => {
    try {
        // Enviar credenciales al backend
        const response = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({ username, password })
        });

        if (response.ok) {
            // Obtener detalles del usuario autenticado
            const userResponse = await fetch("/api/user", {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });

            if (userResponse.ok) {
                const userData = await userResponse.json();
                login(userData); // Guardar usuario en el contexto
            }
        } else {
            alert("Credenciales incorrectas");
        }
    } catch (error) {
        console.error("Error en el login:", error);
    }
};
