package difabelzone.backend.config;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

     @Bean
     public OpenAPI customOpenAPI(){
          return new OpenAPI().info(new Info().title("E-Commerce DifabelZone Application")
                          .description("Backend APIs for E-Commerce app")
                          .version("v1.0.0")
                          .contact(new Contact().name("Hendro Wunga").url("https://github.com/hendrowunga/DifabelZone").email("hendrowunga073@gmail.com"))
                          .license(new License().name("License").url("/")))
                  .externalDocs(new ExternalDocumentation().description("E-Commerce App Documentation")
                          .url("http://localhost:8089/api/v1/swagger-ui/index.html"));
     }
}
