package difabelzone.backend.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "addresses")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Address {
     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Long addressId;

     @NotBlank
     @Size(min = 5, message = "Street name must be atleast 5 characters")
     private String street;

     @NotBlank
     @Size(min = 5, message = "Building name must be atleast 5 characters")
     private String buildingName;

     @NotBlank
     @Size(min = 3, message = "Village name must be atleast 3 characters")
     private String village;

     @NotBlank
     @Size(min = 4, message = "Sub-District name must be atleast 4 characters")
     private String subdistrict;

     @NotBlank
     @Size(min = 4, message = "City name must be atleast 4 characters")
     private String city;

     @NotBlank
     @Size(min = 4, message = "Province name must be atleast 4 characters")
     private String province;

     @NotBlank
     @Size(min = 5, message = "Pincode must be atleast 5 characters")
     private String pincode;

     public Address(String street, String buildingName, String village, String subdistrict, String city, String province, String pincode) {
          this.street = street;
          this.buildingName = buildingName;
          this.village = village;
          this.subdistrict = subdistrict;
          this.city = city;
          this.province = province;
          this.pincode = pincode;
     }

     @ManyToOne
     @JoinColumn(name = "user_id")
     private User user;


}



