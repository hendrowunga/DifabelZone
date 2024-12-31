package difabelzone.backend.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "address")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    private String street;
    @NotBlank
    private String zip_code;
    @NotBlank
    private String village;
    @NotBlank
    private String sub_district;
    @NotBlank
    private String district;
    @NotBlank
    private String province;
    @ManyToMany(mappedBy = "addresses")
    private List<User> users=new ArrayList<>();
}
