const Menu = require('../models/menu');
const menucontroller = {};
menucontroller.getAllMenus = async (req,res)=>{
     const menus = await Menu.find();
     res.json(menus);
};
menucontroller.getMenus = async(req,res)=>{
     const menus = await Menu.find({price: {$lte:req.params.price}});
     res.json(menus);
};
menucontroller.getMenu = async (req,res)=>{
     const menu = await Menu.find({name:req.params.name});
     res.json(menu);
};
menucontroller.createMenu = async (req,res)=>{
     const menu  = new Menu(req.body);
     await menu.save();
     res.json({status:'menu saved'});
};
menucontroller.editMenu = async (req,res)=>{
     const {id}=req.params;
     const menu = {
          name: req.body.name,
          photo: req.body.photo,
          price: req.body.price
     }
     await Menu.findByIdAndUpdate(id,{$set:menu},{new:true});
     res.json({status:'menu updated'});
};
menucontroller.deleteMenu = async (req,res)=>{
     await Menu.findByIdAndRemove(req.params.id);
     res.json({status:'menu deleted'});
};
module.exports = menucontroller;
