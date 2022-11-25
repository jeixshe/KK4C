const User = require('../models/Users')

module.exports = {
  //  get all users
    index: async (req, res) => {
      try {
        const users = await User.find()  
        if(users.length > 0){
          res.status(200).json({
            status: true,
            data: users,
            method: req.method,
            url: req.urlq
          })
        }else{
          res.json({
            status: false,
            message: "Data Kosong"
          })
        } 
      } catch (error) {
          res.status(400).json({sucess: false})
      }
        
      },
      
      // get a user
      show: async (req, res) => {
        try {
          const user = await User.findById(req.params.id)
          res.json({
            status: true,
            data: user,
            method: req.method,
            url: req.url,
            message: "Data Berhasil di dapat"
          })

        } catch (error) {
          res.status(400).json({success: false})
        }
      }, 

      store: async (req, res) => {
        try {
          const user = await User.create(req.body)
          res.status(200).json({
            status: true,
            data: user,
            method: req.method,
            url: req.url,
            message: "Data Berhasil di tambahkan"
          })
        } catch (error) {
           res.status(400).json({success: error.message})
        }

    },
      update: async (req, res) => {
        try {
          const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
          })
          res.json({
            status: true,
            data: user,
            method: req.method,
            url: req.url,
            message: "Data Berhasil diubah"
          })

        } catch (error) {
          res.status(400).json({success: error.message})
        }
        
        
      },
      delete: async (req, res) => {
        try {
          await User.findByIdAndDelete(req.params.id)
          res.json({
            status: true,
            method: req.method,
            url: req.url,
            message: "Data Berhasil di hapus"
          })
        } catch (error) {
          res.status(400).json({success: error.message})

        }
        
      },
}