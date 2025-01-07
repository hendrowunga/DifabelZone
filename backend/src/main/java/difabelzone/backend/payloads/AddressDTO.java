package difabelzone.backend.payloads;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddressDTO {

     private Long addressId;
     private String street;
     private String buildingName;
     private String subdistrict;
     private String village;
     private String city;
     private String province;
     private String pincode;


}
