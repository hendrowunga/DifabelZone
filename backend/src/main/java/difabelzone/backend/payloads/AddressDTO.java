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
    private String zip_code;
    private String village;
    private String sub_district;
    private String district;
    private String province;

}
