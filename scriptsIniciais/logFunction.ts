function logs(mensage, status) {

    const value = ["info", "warning", "error"]
    if (value.includes(status)) {
        console.log(mensage, status)
    } else {
        console.log("Invalid status", status)
    }
}

logs("Aqui está sua mensagem de Erro", "error")