const UserRepository = require("../repositories/UserRepository")
const UserCreateService = require("../services/UserCreateService")
const AppError = require("../utils/AppError")

class UsersController {
  async create(request, response) {
    const { name, email, password, isAdmin } = request.body

    if(!name || (name && name.length <= 0)){
      throw new AppError("Nome é obrigatório!")
    }

    if(!email || (email && email.length <= 0)){
      throw new AppError("Email é obrigatório!")
    }

    if(!password || (password && password.length <= 0)){
      throw new AppError("Senha é obrigatória!")
    }
    
    const userRepository = new UserRepository()
    const userCreateService = new UserCreateService(userRepository)
    
    await userCreateService.execute({ name, email, password, isAdmin })

    return response.status(201).json()
  }
}

module.exports = UsersController