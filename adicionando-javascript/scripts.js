const Modal = {
    open() {
        // abrir o modal
        //adicionar a class active ao modal
        document.querySelector('.modal-overlay').classList.add('active')
    },

    close() {
        //fechar o modal
        // remover a class active do modal
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}

const Storage = {
    get() {
        return JSON.parse(localStorage.getItem("dev.finances:transactions") || [])
    },

    set(transactions) {
        localStorage.setItem("dev.finances:transactions", JSON.stringify(transactions))
    }
}