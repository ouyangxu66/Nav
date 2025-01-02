package com.down.nav.user.service;

import com.dawn.nav.model.dto.TokenDTO;

public interface AuthService {
    TokenDTO refreshToken(String refreshToken);
}
