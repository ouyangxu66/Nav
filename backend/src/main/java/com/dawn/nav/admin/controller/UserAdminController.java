package com.dawn.nav.admin.controller;

import com.dawn.nav.admin.service.UserAdminService;
import com.dawn.nav.model.po.Result;
import com.dawn.nav.model.vo.PageBeanVO;
import com.dawn.nav.model.vo.UserVO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/admin/user")
public class UserAdminController {
    private final UserAdminService userAdminService;
    @GetMapping("/page")
    public Result<PageBeanVO<UserVO>> getUserPageList(
            @RequestParam Integer pageNum,
            @RequestParam Integer pageSize,
            @RequestParam(required = false) String orderBy,
            @RequestParam(required = false) String searchContent) {
        PageBeanVO<UserVO> userVOPageBeanVO = userAdminService.getUserPageList(pageNum, pageSize, orderBy, searchContent);
        return Result.success(userVOPageBeanVO);
    }

    @DeleteMapping
    public Result delUser(@RequestParam Long id) {
        // update用户的role
        userAdminService.delUser(id);
        return Result.success();
    }

    @PostMapping
    public Result updateRole(@RequestParam Integer role, @RequestParam Long userId){
        userAdminService.updateRole(userId, role);
        return Result.success();
    }
}
// 负责处理与用户管理相关的HTTP请求，为管理员提供用户分页查询、删除用户和更新用户角色的接口