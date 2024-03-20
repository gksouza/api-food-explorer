const UserRepository = require("../repositories/UserRepository")
const UserCreateService = require("../services/UserCreateService")

class UsersController {
  async create(request, response) {
    const { name, email, password, isAdmin } = request.body;

    const userRepository = new UserRepository()
    const userCreateService = new UserCreateService(userRepository)
    
    await userCreateService.execute({ name, email, password, isAdmin })

    return response.status(201).json()
  }
}

module.exports = UsersController