const validation = {
    email: {
        presence: {
            message: '^Por favor, insira um email'
        },
        email: {
            message: '^Por favor, insira um email válido'
        }
    },

    user: {
        presence: {
            message: '^Por favor, insira um nome de usuário'
        }
    },

    password: {
        presence: {
            message: '^Por favor, insira uma senha válida'
        },
        length: {
            minimum: 5,
            message: '^Por favor, insira uma senha com ao menos 5 caracteres'
        }
    }
}

export default validation