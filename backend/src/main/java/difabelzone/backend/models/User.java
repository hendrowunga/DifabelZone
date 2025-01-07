package difabelzone.backend.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "username"),
                @UniqueConstraint(columnNames = "email")
        })
public class User {

     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     @Column(name = "user_id")
     private Long userId;

     @NotBlank
     @Size(max = 20)
     @Column(name = "username")
     private String userName;

     @NotBlank
     @Size(max = 50)
     @Email
     @Column(name = "email")
     private String email;

     @NotBlank
     @Size(max = 120)
     @Column(name = "password")
     private String password;

     public User(String userName, String email, String password) {
          this.userName = userName;
          this.email = email;
          this.password = password;
     }

     @Setter
     @Getter
     @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE},
             fetch = FetchType.EAGER)
     @JoinTable(name = "user_role",
             joinColumns = @JoinColumn(name = "user_id"),
             inverseJoinColumns = @JoinColumn(name = "role_id"))
     private Set<Role> roles = new HashSet<>();

     @Getter
     @Setter
     @OneToMany(mappedBy = "user", cascade = {CascadeType.PERSIST, CascadeType.MERGE}, orphanRemoval = true)
//    @JoinTable(name = "user_address",
//                joinColumns = @JoinColumn(name = "user_id"),
//                inverseJoinColumns = @JoinColumn(name = "address_id"))
     private List<Address> addresses = new ArrayList<>();

     @ToString.Exclude
     @OneToMany(mappedBy = "user",
             cascade = {CascadeType.PERSIST, CascadeType.MERGE},
             orphanRemoval = true)
     private Set<Product> products;
}