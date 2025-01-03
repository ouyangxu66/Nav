package com.dawn.nav.admin.controller;

import com.dawn.nav.admin.service.MenuService;
import com.dawn.nav.model.dto.MenuDTO;
import com.dawn.nav.model.po.Menu;
import com.dawn.nav.model.po.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class MenuController {
    private final MenuService menuService;
    @PutMapping("/admin/menu")
    public Result addMenu(@RequestBody MenuDTO menuDTO){
        menuService.addMenu(menuDTO);
        return Result.success();
    }

    @DeleteMapping("/admin/menu")
    public Result delMenu(@RequestParam Integer id){
        menuService.delMenu(id);
        return Result.success();
    }

    @PostMapping("/admin/menu")
    public Result updateMenu(@RequestBody MenuDTO menuDTO){
        menuService.updateMenu(menuDTO);
        return Result.success();
    }

    // 0 顶部链接
    // 1 底部友情链接
    @GetMapping("/public/menu")
    public Result<List<Menu>> getMenuList(Integer type){
        List<Menu> list = menuService.listMenu(type);
        return Result.success(list);
    }
}
// 为管理员提供菜单管理的接口