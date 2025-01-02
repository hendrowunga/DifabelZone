package difabelzone.backend.payloads;

import difabelzone.backend.models.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private Long userId;
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private Set<Role> roles = new HashSet<>();
    private AddressDTO addressDTO;
}
