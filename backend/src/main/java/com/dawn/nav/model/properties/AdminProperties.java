package com.dawn.nav.model.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.List;

@Data
@Component
@ConfigurationProperties(prefix = "admin")
public class AdminProperties {
    private List<String> email;
}
// 从应用程序的配置文件application.yml中读取以 admin 为前缀的配置信息，并将其绑定到类的属性上