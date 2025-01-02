package difabelzone.backend.repositories;

import difabelzone.backend.models.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address,Long> {

    Address findByVillageAndDistrictAndSubDistrictAndZipcodeAndStreetAndProvince(String street, String zip_code, String village,
                                                                           String sub_district, String district, String province);
}
